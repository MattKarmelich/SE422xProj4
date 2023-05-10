import React from 'react';
import Category from './Category';

interface LandingPageProps {
  logout: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ logout }) => {
  const handleLogout = () => {
      localStorage.removeItem('username')
    logout();
  };
  return (
    <div>
      <h1>Project 4</h1>
      <Category title="For Sale" path="/forsale" />
      <p>
      <Category title="Housing" path="/housing" /> </p>
      <p>
      <Category title="Services" path="/services" /> </p>
      <p>
      <Category title="Jobs" path="/jobs" /> </p>
      <p>
      <Category title="Comunity" path="/community" /> </p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default LandingPage;