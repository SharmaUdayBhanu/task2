import { motion } from 'framer-motion';
import { useState } from 'react';
import NFTPost from '../components/feed/NFTPost';

const NFTMarketplacePage = () => {
  const [nfts, setNfts] = useState([
    {
      id: 1,
      title: "Digital Art #1",
      content: "This is my first NFT creation on the platform!",
      media: "https://source.unsplash.com/random/400x400/?art",
      likes: 24,
      price: 0.1,
      editions: 5
    },
    // Add more NFTs...
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 pb-10 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl font-bold text-white mb-8"
        >
          NFT Marketplace
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {nfts.map((nft) => (
            <NFTPost 
              key={nft.id}
              post={nft}
              onLike={() => console.log("Like NFT", nft.id)}
              onCollect={() => console.log("Collect NFT", nft.id)}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NFTMarketplacePage;
