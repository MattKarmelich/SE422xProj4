// pages/ForSale.tsx
import React from 'react';
import Subcategory from '../components/Subcategory';

const Jobs: React.FC = () => {
  return (
    <div>
      <h1>Jobs</h1>

      <p>
      <Subcategory title="Careers" path="/Jobs/Careers" /> </p>
      <p>
      <Subcategory title="CloudComputing" path="/Jobs/CloudComputing" /> </p><p>
      <Subcategory title="Engineering" path="/Jobs/Engineering" /> </p><p>
      <Subcategory title="Business" path="/Jobs/Business" /> </p>
      <p>
      <Subcategory title="Others" path="/Jobs/Others" /> </p>
      {/* Add the rest of the subcategories */}
    </div>
  );
};

export default Jobs;