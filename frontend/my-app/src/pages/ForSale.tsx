// pages/ForSale.tsx
import React from 'react';
import Subcategory from '../components/Subcategory';

const ForSale: React.FC = () => {
  return (
    <div>
      <h1>For Sale</h1>
      <Subcategory title="Cars + Trucks" path="/forsale/cars-trucks" />
      <p>
      <Subcategory title="Motorcycles" path="/forsale/motorcycles" /> </p>
      <p>
      <Subcategory title="Boats" path="/forsale/boats" /> </p>
      <p>
      <Subcategory title="Books" path="/forsale/books" /> </p>
      <p>
      <Subcategory title="Furniture" path="/forsale/furniture" /> </p>
      {/* Add the rest of the subcategories */}
    </div>
  );
};

export default ForSale;
