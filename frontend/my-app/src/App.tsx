import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForSale from './pages/ForSale';
import Housing from './pages/Housing';
import Services from './pages/Services';
import Jobs from './pages/Jobs';
import Community from './pages/Community';
import LoginPage from './components/LoginPage';

const App: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    // Implement login functionality
  };

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<LoginPage onLogin={handleLogin} />} /> */}
        <Route path="/forsale" element={<ForSale />} />
        <Route path="/housing" element={<Housing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
};

export default App;
