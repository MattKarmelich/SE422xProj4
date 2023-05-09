// pages/ForSale.tsx
import React from 'react';
import Subcategory from '../components/Subcategory';
import {useNavigate, useParams} from 'react-router-dom';
import PostingsView from "../components/PostingsView";
import {AdForm} from "../components/AdForm";
import {Academic, Athletics, DefaultProto, Developer, Elderly, Pet} from "../types";

const Community: React.FC = () => {

    let navigate = useNavigate();
    const wildcard = useParams()["*"];

    const handleBack = () => {
        navigate('/')
    }

    var dataModel: any = new DefaultProto();

    if (wildcard === "") {
        return (
            <div>
                <h1>Community</h1>
                    <Subcategory title="Athletics" path="/community/athletics"/>
                <p>
                    <Subcategory title="Pets" path="/community/pets"/></p>
                <p>
                    <Subcategory title="Academic" path="/community/academic"/></p>
                <p>
                    <Subcategory title="Developer" path="/community/developer"/></p>
                <p>
                    <Subcategory title="Elderly" path="/community/elderly"/></p>
                <button onClick={handleBack}>Back</button>
            </div>
        );
    } else {
        if (wildcard !== undefined && wildcard) {
            switch (wildcard) {
                case 'athletics':
                    dataModel = new Athletics();
                    break;
                case 'pets':
                    dataModel = new Pet();
                    break;
                case 'academic':
                    dataModel = new Academic();
                    break;
                case 'developer':
                    dataModel = new Developer();
                    break;
                case 'elderly':
                    dataModel = new Elderly();
                    break;
            }
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
