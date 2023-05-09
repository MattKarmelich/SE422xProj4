import React from 'react';
import {postAd} from "../endpoints/postingEP";
import NewEntry from "./NewEntry";

interface AdFormProps {
    category: string;
    dataModel: { [key: string]: string };
}

export function AdForm({ category, dataModel }: AdFormProps) {
    const handleSubmit = (fields: { [key: string]: string }) => {
        postAd(category, fields);
    };

    return (
        <NewEntry
            onSubmit={handleSubmit}
            fields={Object.keys(dataModel)}
        />
    );
}
