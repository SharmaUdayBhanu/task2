import { motion } from 'framer-motion';

const SettingsPage = () => {
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
          Settings
        </motion.h1>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-900 rounded-xl p-6"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Account Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-2">Username</label>
              <input 
                type="text" 
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Bio</label>
              <textarea 
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows="4"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SettingsPage;