import React from "react";
import NewEntry from "../../components/NewEntry";
import { TrucksAndCars } from "../../types";

const fields: (keyof TrucksAndCars)[] = [
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

interface CarFormProps {
  onSubmit: (fields: TrucksAndCars) => void;
}

const CarForm: React.FC<CarFormProps> = ({ onSubmit }) => {
  return <NewEntry onSubmit={onSubmit} fields={fields} />;
};

export default CarForm;