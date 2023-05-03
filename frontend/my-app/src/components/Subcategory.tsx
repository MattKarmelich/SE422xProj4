// components/Subcategory.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface SubcategoryProps {
  title: string;
  path: string;
}

const Subcategory: React.FC<SubcategoryProps> = ({ title, path }) => {
  return <Link to={path}>{title}</Link>;
};

export default Subcategory;