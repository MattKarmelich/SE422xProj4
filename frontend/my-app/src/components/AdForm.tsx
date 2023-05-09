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

    if (document.cookie.includes('username')) {
        return (
            <NewEntry
                onSubmit={handleSubmit}
                fields={Object.keys(dataModel)}
            />
        );
    } else {
        return (
            <div>
                <h4 style={{
                    textAlign: "center"
                }}>
                    Please <a href={"/"}>login</a> to create a new posting
                </h4>
            </div>
        )
    }


}
