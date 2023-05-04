// pages/ForSale.tsx
import React from 'react';
import Subcategory from '../components/Subcategory';

const Services: React.FC = () => {
  return (
    <div>
      <h1>Services</h1>
      <p>
      <Subcategory title="Repair" path="/Services/repair" /> </p>
      <p>
      <Subcategory title="Financial Services" path="/Services/financialservices" /> </p>
      <p>
      <Subcategory title="Construction" path="/Services/Construction" /> </p>
      <p>
      <Subcategory title="PublicRelation" path="/Services/PublicRelation" /> </p>
      <p>
      <Subcategory title="HealthCare" path="/Services/HealthCare" /> </p>
      
      {/* Add the rest of the subcategories */}
    </div>
  );
};

export default Services;