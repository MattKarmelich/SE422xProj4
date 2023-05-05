import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForSale from './pages/ForSale';
import Housing from './pages/Housing';
import Services from './pages/Services';
import Jobs from './pages/Jobs';
import Community from './pages/Community';
import LoginPage from './components/LoginPage';
import Landing from './components/LandingPage';
import Register from './pages/Register';


const App: React.FC = () => {
  const [enter, setEnter] = useState(false);
  const [username, setUsername] = useState("")

  const handleLogin = (success: boolean, account: string) => {
    setUsername(account);
    setEnter(success);
  };
  const handleLogout = () => {
    setEnter(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          enter ? <Landing logout={handleLogout}/>
          :
          <LoginPage onEnter={handleLogin} />} />
        <Route path="/forsale" element={<ForSale />} />
        <Route path="/housing" element={<Housing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/community" element={<Community />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
