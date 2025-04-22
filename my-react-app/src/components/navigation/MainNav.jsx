import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useBlockchain } from '../../contexts/BlockchainContext';

const MainNav = () => {
  const { account, connectWallet, isConnected } = useBlockchain();

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-80 backdrop-blur-md z-40 border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            DecentraSocial
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" text="Home" />
            <NavLink to="/explore" text="Explore" />
            <NavLink to="/nfts" text="NFTs" />
            <NavLink to="/profile" text="Profile" />
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={connectWallet}
          className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium"
        >
          {isConnected ? `${account.slice(0, 6)}...${account.slice(-4)}` : "Connect Wallet"}
        </motion.button>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ to, text }) => {
  return (
    <Link to={to}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="text-gray-300 hover:text-white transition-colors"
      >
        {text}
      </motion.div>
    </Link>
  );
};

export default MainNav;