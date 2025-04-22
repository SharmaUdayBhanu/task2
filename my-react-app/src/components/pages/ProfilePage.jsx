import { motion } from 'framer-motion';
import ProfileHeader from '../components/profile/ProfileHeader';
import ReputationBadge from '../components/profile/ReputationBadge';
import PostFeed from '../components/feed/PostFeed';

const ProfilePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 pb-10 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <ProfileHeader />
          <ReputationBadge />
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Your Posts</h2>
          <PostFeed isProfile={true} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfilePage;