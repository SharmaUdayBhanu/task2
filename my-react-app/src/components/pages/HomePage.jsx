import { motion } from 'framer-motion';
import PostFeed from '../components/feed/PostFeed';
import CreatePost from '../components/feed/CreatePost';
import { useBlockchain } from '../contexts/BlockchainContext';

const HomePage = () => {
  const { isConnected } = useBlockchain();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 pb-10 px-4"
    >
      <div className="max-w-3xl mx-auto">
        {isConnected && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <CreatePost />
          </motion.div>
        )}
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <PostFeed />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;