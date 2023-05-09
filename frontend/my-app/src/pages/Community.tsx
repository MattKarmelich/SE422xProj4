// pages/ForSale.tsx
import React from 'react';
import Subcategory from '../components/Subcategory';
import {useNavigate, useParams} from 'react-router-dom';
import PostingsView from "../components/PostingsView";
import {AdForm} from "../components/AdForm";

const Community: React.FC = () => {

    let navigate = useNavigate();
    const wildcard = useParams()["*"];

    const handleBack = () => {
        navigate('/')
    }

    var dataModel: any;

    if (wildcard === "") {
        return (
            <div>
                <h1>Community</h1>
                <Subcategory title="Residential" path="/community/residential"/>
                <p>
                    <Subcategory title="mission" path="/community/mission"/></p>
                <p>
                    <Subcategory title="rural" path="/community/rural"/></p>
                <p>
                    <Subcategory title="urban" path="/community/urban"/></p>
                <p>
                    <Subcategory title="retired-housing" path="/community/retired"/></p>
                <button onClick={handleBack}>Back</button>
            </div>
        );
    } else {
        if (wildcard !== undefined && wildcard) {
            return (
                <div>
                    <PostingsView category={"community/" + wildcard}/>
                    <AdForm
                        category={"community/" + wildcard}
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

export default Community;
