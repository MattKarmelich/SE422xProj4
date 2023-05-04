// pages/ForSale.tsx
import React from 'react';
import Subcategory from '../components/Subcategory';

const Community: React.FC = () => {
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
      
      {/* Add the rest of the subcategories */}
    </div>
  );
};

export default Community;
