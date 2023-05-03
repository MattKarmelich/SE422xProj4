// pages/ForSale.tsx
import React from 'react';
import Subcategory from '../components/Subcategory';

const ForSale: React.FC = () => {
  return (
    <div>
      <h1>For Sale</h1>
      <Subcategory title="Cars + Trucks" path="/forsale/cars-trucks" />
      {/* Add the rest of the subcategories */}
    </div>
  );
};

export default ForSale;
