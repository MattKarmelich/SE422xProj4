// pages/ForSale.tsx
import React from 'react';
import Subcategory from '../components/Subcategory';
import { useNavigate } from 'react-router-dom';

const Jobs: React.FC = () => {
  let navigate = useNavigate();

  const handleBack = () => {
    navigate('/')
  }

  return (
    <div>
      <h1>Jobs</h1>

      <p>
      <Subcategory title="Careers" path="/jobs/Careers" /> </p>
      <p>
      <Subcategory title="CloudComputing" path="/jobs/CloudComputing" /> </p><p>
      <Subcategory title="Engineering" path="/jobs/Engineering" /> </p><p>
      <Subcategory title="Business" path="/jobs/Business" /> </p>
      <p>
      <Subcategory title="Others" path="/jobs/Others" /> </p>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default Jobs;