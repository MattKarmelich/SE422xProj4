import React, { useState } from "react";

interface FormProps<T> {
    onSubmit: (fields: T) => void;
    fields: Array<keyof T & string>;
    initialValues?: T;
  }

function NewEntry<T>({ onSubmit, fields }: FormProps<T>) {
  const [values, setValues] = useState<T>(({} as T));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value } as T);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field}>
          <label htmlFor={field.toString()}>{field.toString()}</label>
          <input
            id={field.toString()}
            name={field.toString()}
            type="text"
            value={values[field] as string ?? ""}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewEntry;
