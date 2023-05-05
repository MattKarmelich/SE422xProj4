import React from "react";
import NewEntry from "../../components/NewEntry";
import { Motorcycles } from "../../types";

const fields: (keyof Motorcycles)[] = [
  "year",
  "make",
  "model",
  "mileage",
  "color",
  "condition",
  "price",
  "description",
  "location",
  "contact",
];

interface MotorcycleFormProps {
  onSubmit: (fields: Motorcycles) => void;
}

const MotorcyclesForm: React.FC<MotorcycleFormProps> = ({ onSubmit }) => {
  return <NewEntry onSubmit={onSubmit} fields={fields} />;
};

export default MotorcyclesForm;