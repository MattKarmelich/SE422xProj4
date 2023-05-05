import React from "react";
import NewEntry from "../../components/NewEntry";
import { Furniture } from "../../types";

const fields: (keyof Furniture)[] = [
  "furnitureType",
  "material",
  "style",
  "condition",
  "price",
  "description",
  "location",
  "contact",
];

interface FurnitureFormProps {
  onSubmit: (fields: Furniture) => void;
}

const FurnitureForm: React.FC<FurnitureFormProps> = ({ onSubmit }) => {
  return <NewEntry onSubmit={onSubmit} fields={fields} />;
};

export default FurnitureForm;