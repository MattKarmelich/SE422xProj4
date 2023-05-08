import React from "react";
import NewEntry from "../../components/NewEntry";
import { TrucksAndCars } from "../../types";
import {backendRoute} from "../../endpoints/backendRoute";

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

const onSubmit = (fields: TrucksAndCars) => {
  // Construct the posting data object
  const postingData = {
    category: 'Cars + Trucks',
    fields: fields,
  };

  // Fetch the backend API to create a new posting
  fetch(`${backendRoute}/posting`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postingData),
  })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Do something with the response data
      })
      .catch((error) => {
        console.error(error);
        // Handle the error
      });
};


const CarForm: React.FC = () => {
  return <NewEntry onSubmit={onSubmit} fields={fields} />;
};

export default CarForm;