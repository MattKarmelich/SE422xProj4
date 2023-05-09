// pages/ForSale.tsx
import React from 'react';
import Subcategory from '../components/Subcategory';
import {useNavigate, useParams} from 'react-router-dom';
import PostingsView from "../components/PostingsView";
import {AdForm} from "../components/AdForm";

const Jobs: React.FC = () => {
    let navigate = useNavigate();
    const wildcard = useParams()["*"];

    const handleBack = () => {
        navigate('/')
    }

    var dataModel: any;

    if (wildcard === "") {
        return (
            <div>
                <h1>Jobs</h1>

                <p>
                    <Subcategory title="Careers" path="/jobs/Careers"/></p>
                <p>
                    <Subcategory title="CloudComputing" path="/jobs/CloudComputing"/></p><p>
                <Subcategory title="Engineering" path="/jobs/Engineering"/></p><p>
                <Subcategory title="Business" path="/jobs/Business"/></p>
                <p>
                    <Subcategory title="Others" path="/jobs/Others"/></p>
                <button onClick={handleBack}>Back</button>
            </div>
        );
    } else {
        if (wildcard !== undefined && wildcard) {
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