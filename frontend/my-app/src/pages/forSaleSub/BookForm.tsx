import React from "react";
import NewEntry from "../../components/NewEntry";
import { Books } from "../../types";

const fields: (keyof Books)[] = [
  "title",
  "author",
  "genre",
  "condition",
  "isbnAsin",
  "price",
  "description",
  "location",
  "contact",
];

interface BookFormProps {
  onSubmit: (fields: Books) => void;
}

const BookForm: React.FC<BookFormProps> = ({ onSubmit }) => {
  return <NewEntry onSubmit={onSubmit} fields={fields} />;
};

export default BookForm;