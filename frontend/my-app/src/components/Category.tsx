// components/Category.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryProps {
  title: string;
  path: string;
}

const Category: React.FC<CategoryProps> = ({ title, path }) => {
  return <Link to={path}>{title}</Link>;
};

export default Category;
