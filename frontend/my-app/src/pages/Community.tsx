// pages/ForSale.tsx
import React from 'react';
import Subcategory from '../components/Subcategory';
import { useNavigate } from 'react-router-dom';

const Community: React.FC = () => {

  let navigate = useNavigate();

  const handleBack = () => {
    navigate('/')
  }

  return (
    <div>
      <h1>Community</h1>
      <Subcategory title="Residential" path="/community/residential" />
      <p>
      <Subcategory title="mission" path="/community/mission" /> </p>
      <p>
      <Subcategory title="rural" path="/community/rural" /> </p>
      <p>
      <Subcategory title="urban" path="/community/urban" /> </p>
      <p>
      <Subcategory title="retired-housing" path="/community/retired" /> </p>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default Community;
