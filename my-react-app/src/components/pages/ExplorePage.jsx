import { motion } from 'framer-motion';
import PostFeed from '../components/feed/PostFeed';

const ExplorePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 pb-10 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl font-bold text-white mb-8"
        >
          Explore Decentralized Content
        </motion.h1>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <PostFeed exploreMode={true} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExplorePage;
