import React, { PropsWithChildren } from "react";
import { useNavigate } from 'react-router-dom';

interface JsonDisplayProps {
    jsonList: object[];
    category: string;
    subcategory: string;
}

const EntryListing: React.FC<PropsWithChildren<JsonDisplayProps>> = (props) => {
    const { jsonList, category, subcategory } = props;

    let navigate = useNavigate();


    const handleNewEntry = () => {
        navigate(`/${category}/${subcategory}/new`)
    }

    return (
        <div>
            <h1>{subcategory}</h1>
            <button onClick={handleNewEntry}>Add Listing</button>
            <br/>
            {jsonList.map((jsonObj: object, index: number) => (
                <pre key={index}>{JSON.stringify(jsonObj, null, 2)}</pre>
            ))}
            <button onClick={handleNewEntry}>Add Listing</button>
        </div>
    );
};

export default EntryListing;