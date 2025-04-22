
import { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';

const BlockchainContext = createContext();

export const BlockchainProvider = ({ children }) => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [account, setAccount] = useState(null);
  const [currentBlock, setCurrentBlock] = useState(0);
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        
        setProvider(provider);
        setSigner(signer);
        setAccount(accounts[0]);
        setIsConnected(true);
        
        // Get initial block number
        const blockNumber = await provider.getBlockNumber();
        setCurrentBlock(blockNumber);
        
        // Subscribe to block updates
        provider.on("block", (blockNumber) => {
          setCurrentBlock(blockNumber);
        });
        
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <BlockchainContext.Provider value={{
      provider,
      signer,
      account,
      currentBlock,
      isConnected,
      connectWallet
    }}>
      {children}
    </BlockchainContext.Provider>
  );
};

export const useBlockchain = () => useContext(BlockchainContext);