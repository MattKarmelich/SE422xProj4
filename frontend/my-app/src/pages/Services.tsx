// pages/ForSale.tsx
import React from 'react';
import Subcategory from '../components/Subcategory';
import {useNavigate, useParams} from 'react-router-dom';
import PostingsView from "../components/PostingsView";
import {AdForm} from "../components/AdForm";

const Services: React.FC = () => {
    let navigate = useNavigate();
    const wildcard = useParams()["*"];

    const handleBack = () => {
        navigate('/')
    }

    var dataModel: any;

    if (wildcard === "") {
        return (
            <div>
                <h1>Services</h1>
                <p>
                    <Subcategory title="Repair" path="/services/repair"/></p>
                <p>
                    <Subcategory title="Financial Services" path="/services/financialservices"/></p>
                <p>
                    <Subcategory title="Construction" path="/services/Construction"/></p>
                <p>
                    <Subcategory title="PublicRelation" path="/services/PublicRelation"/></p>
                <p>
                    <Subcategory title="HealthCare" path="/services/HealthCare"/></p>
                <button onClick={handleBack}>Back</button>
            </div>
        );
    } else {
        if (wildcard !== undefined && wildcard) {
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