import React from "react";
import NewEntry from "../../components/NewEntry";
import { Boats } from "../../types";

const fields: (keyof Boats)[] = [
  "year",
  "make",
  "model",
  "color",
  "type",
  "condition",
  "price",
  "description",
  "location",
  "contact",
];

interface BoatFormProps {
  onSubmit: (fields: Boats) => void;
}

const BoatForm: React.FC<BoatFormProps> = ({ onSubmit }) => {
  return <NewEntry onSubmit={onSubmit} fields={fields} />;
};

export default BoatForm;