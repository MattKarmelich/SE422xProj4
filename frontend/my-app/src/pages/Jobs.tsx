// pages/ForSale.tsx
import React from 'react';
import Subcategory from '../components/Subcategory';
import {useNavigate, useParams} from 'react-router-dom';
import PostingsView from "../components/PostingsView";
import {AdForm} from "../components/AdForm";
import {ManualLabor, Retail, Security, SoftwareDesign, SoftwareDevelopment} from "../types";
import {DefaultProto} from "../types";

const Jobs: React.FC = () => {
    let navigate = useNavigate();
    const wildcard = useParams()["*"];

    const handleBack = () => {
        navigate('/')
    }

    var dataModel: any = new DefaultProto();

    if (wildcard === "") {
        return (
            <div>
                <h1>Jobs</h1>
                <p>
                    <Subcategory title="Manual labor" path="/jobs/manuallabor"/></p>
                <p>
                    <Subcategory title="Retail" path="/jobs/retail"/></p>
                <p>
                    <Subcategory title="Software Development" path="/jobs/softwaredev"/></p>
                <p>
                    <Subcategory title="Software design" path="/jobs/softwaredesign"/></p>
                <p>
                    <Subcategory title="Security" path="/jobs/security"/></p>
                <button onClick={handleBack}>Back</button>
            </div>
        );
    } else {
        if (wildcard !== undefined && wildcard) {
            switch (wildcard) {
                case 'manuallabor':
                    dataModel = new ManualLabor();
                    break;
                case 'retail':
                    dataModel = new Retail();
                    break;
                case 'softwaredev':
                    dataModel = new SoftwareDevelopment();
                    break;
                case 'softwaredesign':
                    dataModel = new SoftwareDesign();
                    break;
                case 'security':
                    dataModel = new Security();
            }
            return (
                <div>
                    <PostingsView category={"jobs/" + wildcard}/>
                    <AdForm
                        category={"jobs/" + wildcard}
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

export default Jobs;