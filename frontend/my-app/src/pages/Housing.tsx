// pages/ForSale.tsx
import React from 'react';
import Subcategory from '../components/Subcategory';
import { useNavigate } from 'react-router-dom';

const Housing: React.FC = () => {
  let navigate = useNavigate();

  const handleBack = () => {
    navigate('/')
  }

  return (
    <div>
      <h1>Housing</h1>
      <Subcategory title="apartment" path="/housing/apartment" />
      <p>
      <Subcategory title="bungalow" path="/housing/bungalow" /> </p>
      <p>
      <Subcategory title="FarmHouse" path="/housing/farmhouse" /> </p>
      <p>
      <Subcategory title="Condos" path="/housing/condos" /> </p>
      <p>
      <Subcategory title="Contact" path="/housing/contact" /> 
      </p>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default Housing;