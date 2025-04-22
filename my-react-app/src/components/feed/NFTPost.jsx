import { motion } from 'framer-motion';
import { useState } from 'react';

const NFTPost = ({ post, onLike, onCollect }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative h-64 w-full"
        animate={{
          scale: isHovered ? 1.03 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={post.media}
          alt={post.content}
          className="w-full h-full object-cover"
        />
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <button
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full font-medium"
              onClick={onCollect}
            >
              Collect NFT
            </button>
          </motion.div>
        )}
      </motion.div>

      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{post.title}</h3>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onLike}
            className="flex items-center space-x-1 text-gray-400 hover:text-pink-500"
          >
            <span>❤️</span>
            <span>{post.likes}</span>
          </motion.button>
        </div>
        <p className="text-gray-400 mt-2">{post.content}</p>
        
        <motion.div 
          className="mt-3 flex justify-between items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-sm text-purple-400">Price: {post.price} ETH</span>
          <span className="text-sm text-yellow-400">{post.editions} editions left</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NFTPost;