// pages/ForSale.tsx
import React from 'react';
import Subcategory from '../components/Subcategory';

const Housing: React.FC = () => {
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
      
      {/* Add the rest of the subcategories */}
    </div>
  );
};

export default Housing;