// pages/ForSale.tsx
import React, {useEffect, useState} from 'react';
import Subcategory from '../components/Subcategory';
import {useNavigate, useParams} from 'react-router-dom';
import { TrucksAndCars } from '../types';
import CarForm from "./forSaleSub/CarForm";

const ForSale: React.FC = () => {
    let navigate = useNavigate();
    const wildcard = useParams()["*"];

    const [postings, setPostings] = useState([]);

    const handleBack = () => {
        navigate('/')
    }

    useEffect(() => {
        fetch(`/posting/category/${wildcard}`)
            .then((response) => response.json())
            .then((data) => {
                setPostings(data);
            });
    }, [wildcard]);

    if (wildcard === "") {
        console.log(wildcard);
        return (
            <div>
                <h1>For Sale</h1>
                <Subcategory title="Cars + Trucks" path="/forsale/cars-trucks"/>
                <p>
                    <Subcategory title="Motorcycles" path="/forsale/motorcycles"/></p>
                <p>
                    <Subcategory title="Boats" path="/forsale/boats"/></p>
                <p>
                    <Subcategory title="Books" path="/forsale/books"/></p>
                <p>
                    <Subcategory title="Furniture" path="/forsale/furniture"/></p>
                <button onClick={handleBack}>Back</button>
            </div>
        );
    } else {
        // @ts-ignore
        return (
            <div>
                <h1>{wildcard}</h1>
                {postings.map((posting) => (
                    <div key={posting['_id']}>
                        <h2>{posting['username']}</h2>
                        <p>ID: {posting['_id']}</p>
                        {Object.entries(posting['fields']).map(([key, value]) => (
                            <div key={key}>
                                <p>{key}:</p>
                                <p>{String(value)}</p>
                            </div>
                        ))}
                    </div>
                ))}
                <CarForm />
                <button onClick={handleBack}>Back</button>
            </div>
        )
    }

};

export default ForSale;
