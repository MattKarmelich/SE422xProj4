// pages/ForSale.tsx
import React from 'react';
import Subcategory from '../components/Subcategory';
import {useNavigate, useParams} from 'react-router-dom';
import PostingsView from "../components/PostingsView";
import {Apartments, PurchaseHouse, RentalHouse, RoommateAds, TownHouse} from "../types";
import {AdForm} from "../components/AdForm";
import ForSale from "./ForSale";
import {DefaultProto} from "../types";

const Housing: React.FC = () => {

    let navigate = useNavigate();
    const wildcard = useParams()["*"];

    const handleBack = () => {
        navigate('/')
    }

    var dataModel: any = new DefaultProto();

    if (wildcard === "") {
        return (
            <div>
                <h1>Housing</h1>
                <Subcategory title="Apartments" path="/housing/apartments"/>
                <p>
                    <Subcategory title="Houses for rental" path="/housing/forrent"/></p>
                <p>
                    <Subcategory title="Houses for purchase" path="/housing/forpurchase"/></p>
                <p>
                    <Subcategory title="Roomate search" path="/housing/roomates"/></p>
                <p>
                    <Subcategory title="Town houses" path="/housing/townhouses"/>
                </p>
                <button onClick={handleBack}>Back</button>
            </div>
        );
    } else {
        if (wildcard !== undefined && wildcard) {
            switch (wildcard) {
                case 'apartments':
                    dataModel = new Apartments();
                    break;
                case 'forrent':
                    dataModel = new RentalHouse();
                    break;
                case 'forpurchase':
                    dataModel = new PurchaseHouse();
                    break;
                case 'roomates':
                    dataModel = new RoommateAds();
                    break;
                case 'townhouses':
                    dataModel = new TownHouse();
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