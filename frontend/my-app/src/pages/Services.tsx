// pages/ForSale.tsx
import React from 'react';
import Subcategory from '../components/Subcategory';
import {useNavigate, useParams} from 'react-router-dom';
import PostingsView from "../components/PostingsView";
import {AdForm} from "../components/AdForm";
import {ArtCommissions, Babysitting, DogWalking, FreelanceDevelopment, Gardening} from "../types";
import {DefaultProto} from "../types";

const Services: React.FC = () => {
    let navigate = useNavigate();
    const wildcard = useParams()["*"];

    const handleBack = () => {
        navigate('/')
    }

    var dataModel: any = new DefaultProto();

    if (wildcard === "") {
        return (
            <div>
                <h1>Services</h1>
                <p>
                    <Subcategory title="Babysitting" path="/services/babysitting" /></p>
                <p>
                    <Subcategory title="Dog walking" path="/services/dogwalking"/></p>
                <p>
                    <Subcategory title="Art commissions" path="/services/artcommissions"/></p>
                <p>
                    <Subcategory title="Freelance development" path="/services/freelancedevelopment"/></p>
                <p>
                    <Subcategory title="Gardening" path="/services/gardening"/></p>
                <button onClick={handleBack}>Back</button>
            </div>
        );
    } else {
        if (wildcard !== undefined && wildcard) {
            switch (wildcard) {
                case 'babysitting':
                    dataModel = new Babysitting();
                    break;
                case 'dogwalking':
                    dataModel = new DogWalking();
                    break;
                case 'artcommissions':
                    dataModel = new ArtCommissions();
                    break;
                case 'freelancedevelopment':
                    dataModel = new FreelanceDevelopment();
                    break;
                case 'gardening':
                    dataModel = new Gardening();
                    break;
            }
            return (
                <div>
                    <PostingsView category={"services/" + wildcard}/>
                    <AdForm
                        category={"services/" + wildcard}
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

export default Services;