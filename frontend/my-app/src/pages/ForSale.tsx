// pages/ForSale.tsx
import React, {useEffect, useState} from 'react';
import Subcategory from '../components/Subcategory';
import {useNavigate, useParams} from 'react-router-dom';
import {Boats, Books, Furniture, Motorcycles, TrucksAndCars} from '../types';
import PostingsView from "../components/PostingsView";
import {AdForm} from "../components/AdForm";
import {DefaultProto} from "../types";

const ForSale: React.FC = () => {
    let navigate = useNavigate();
    const wildcard = useParams()["*"];

    const handleBack = () => {
        navigate('/')
    }

    var dataModel: any = new DefaultProto();

    if (wildcard === "") {
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
        if (wildcard !== undefined && wildcard) {
            switch (wildcard) {
                case 'cars-trucks':
                    dataModel = new TrucksAndCars();
                    break;
                case 'motorcycles':
                    dataModel = new Motorcycles();
                    break;
                case 'boats':
                    dataModel = new Boats();
                    break;
                case 'books':
                    dataModel = new Books();
                    break;
                case 'furniture':
                    dataModel = new Furniture();
                    break;
            }
            return (
                <div>
                    <PostingsView category={"forsale/" + wildcard} />
                    <AdForm
                        category={"forsale/" + wildcard}
                        dataModel={dataModel as any}
                    />
                    <button onClick={handleBack}>Back</button>
                </div>
            )
        } else {
            return (<p>Error</p>)
        }

    }

};

export default ForSale;
