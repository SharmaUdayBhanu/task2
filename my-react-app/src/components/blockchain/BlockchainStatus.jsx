import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const BlockchainStatus = ({ isConnected, currentBlock }) => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (isConnected) {
      setShowNotification(true);
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isConnected, currentBlock]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="bg-gray-800 border border-green-500 rounded-lg p-3 shadow-lg"
        >
          <div className="flex items-center space-x-2">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="w-3 h-3 rounded-full bg-green-500"
            />
            <span className="text-sm text-white">
              Connected to blockchain (Block #{currentBlock})
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default BlockchainStatus;