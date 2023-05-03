import React, { useState } from 'react';
import { AdFormFields } from '../types';

interface AdFormProps {
  onSubmit: (fields: AdFormFields) => void;
}

const AdForm: React.FC<AdFormProps> = ({ onSubmit }) => {
  const [fields, setFields] = useState<AdFormFields>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(fields);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add input fields with the handleChange function */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default AdForm;