// pages/ForSale.tsx
import React from 'react';
import Subcategory from '../components/Subcategory';
import { useNavigate } from 'react-router-dom';

const Services: React.FC = () => {
  let navigate = useNavigate();

  const handleBack = () => {
    navigate('/')
  }

  return (
    <div>
      <h1>Services</h1>
      <p>
      <Subcategory title="Repair" path="/services/repair" /> </p>
      <p>
      <Subcategory title="Financial Services" path="/services/financialservices" /> </p>
      <p>
      <Subcategory title="Construction" path="/services/Construction" /> </p>
      <p>
      <Subcategory title="PublicRelation" path="/services/PublicRelation" /> </p>
      <p>
      <Subcategory title="HealthCare" path="/services/HealthCare" /> </p>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default Services;