import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { BlockchainProvider } from './contexts/BlockchainContext';
import { UserProvider } from './contexts/UserContext';
import AnimatedRoute from './components/animations/AnimatedRoute';
import ParticleBackground from './components/animations/ParticleBackground';
import MainNav from './components/navigation/MainNav';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ExplorePage from './pages/ExplorePage';
import NFTMarketplacePage from './pages/NFTMarketplacePage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <Router>
      <UserProvider>
        <BlockchainProvider>
          <div className="min-h-screen bg-gray-950 text-white">
            <ParticleBackground />
            
            <MainNav />
            
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<AnimatedRoute><HomePage /></AnimatedRoute>} />
                <Route path="/profile" element={<AnimatedRoute><ProfilePage /></AnimatedRoute>} />
                <Route path="/explore" element={<AnimatedRoute><ExplorePage /></AnimatedRoute>} />
                <Route path="/nfts" element={<AnimatedRoute><NFTMarketplacePage /></AnimatedRoute>} />
                <Route path="/settings" element={<AnimatedRoute><SettingsPage /></AnimatedRoute>} />
              </Routes>
            </AnimatePresence>
          </div>
        </BlockchainProvider>
      </UserProvider>
    </Router>
  );
}

export default App;