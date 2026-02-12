import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import SimpleLoadingScreen from './components/SimpleLoadingScreen';
import PackagesPage from './src/pages/PackagesPage';
import ReviewsPage from './src/pages/ReviewsPage';

// Pages
import Home from './src/pages/Home';
import BuyNow from './src/pages/BuyNow';
import FastPass from './src/pages/FastPass';
import Careers from './src/pages/Careers';
import Contact from './src/pages/Contact';
import LocationsPage from './src/pages/LocationsPage';

function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Show simple loading screen for 1.8s
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Manage dark mode class on html element
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <Router>
      <SimpleLoadingScreen isVisible={loading} />

      <div className={`min-h-screen flex flex-col font-sans transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home triggerAnimation={!loading} />} />
            <Route path="/buy-now" element={<BuyNow />} />
            <Route path="/fastpass" element={<FastPass />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/packages/*" element={<PackagesPage />} /> {/* Catch-all for sub-routes redirecting to main list */}
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
      <FloatingCTA />
    </Router>
  );
}

export default App;