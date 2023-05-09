import React, { useState } from "react";
import "./FormStyles.css";

interface FormProps {
    onSubmit: (fields: { [key: string]: string }) => void;
    fields: string[];
    initialValues?: { [key: string]: string };
}

function NewEntry({ onSubmit, fields, initialValues }: FormProps) {
    const [values, setValues] = useState<{ [key: string]: string }>(initialValues || {});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(values);
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h4>Create new posting</h4>
            <div className="form-grid">
                {fields.map((field) => (
                    <div key={field} className="field-container">
                        <label htmlFor={field} className="form-label">
                            {field}
                        </label>
                        <input
                            id={field}
                            name={field}
                            type="text"
                            value={values[field] ?? ""}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </div>
                ))}
            </div>
            <button type="submit" className="form-submit">
                Submit
            </button>
        </form>
    );
}


export default NewEntry;
