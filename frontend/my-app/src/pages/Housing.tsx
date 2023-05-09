// pages/ForSale.tsx
import React from 'react';
import Subcategory from '../components/Subcategory';
import {useNavigate, useParams} from 'react-router-dom';
import PostingsView from "../components/PostingsView";
import {Apartments} from "../types";
import {AdForm} from "../components/AdForm";

const Housing: React.FC = () => {

    let navigate = useNavigate();
    const wildcard = useParams()["*"];

    const handleBack = () => {
        navigate('/')
    }

    var dataModel: any;

    if (wildcard === "") {
        return (
            <div>
                <h1>Housing</h1>
                <Subcategory title="apartment" path="/housing/apartment"/>
                <p>
                    <Subcategory title="bungalow" path="/housing/bungalow"/></p>
                <p>
                    <Subcategory title="FarmHouse" path="/housing/farmhouse"/></p>
                <p>
                    <Subcategory title="Condos" path="/housing/condos"/></p>
                <p>
                    <Subcategory title="Contact" path="/housing/contact"/>
                </p>
                <button onClick={handleBack}>Back</button>
            </div>
        );
    } else {
        if (wildcard !== undefined && wildcard) {
            switch (wildcard) {
                case 'apartment':
                    dataModel = new Apartments();
                    break;
            }
            return (
                <div>
                    <PostingsView category={"housing/" + wildcard}/>
                    <AdForm
                        category={"housing/" + wildcard}
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

export default Housing;