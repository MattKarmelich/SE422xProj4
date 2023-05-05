// pages/ForSale.tsx
import React from 'react';
import Subcategory from '../components/Subcategory';
import { useNavigate } from 'react-router-dom';

const ForSale: React.FC = () => {
  let navigate = useNavigate();

  const handleBack = () => {
    navigate('/')
  }

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
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default ForSale;
