import React, {FunctionComponent, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {backendRoute} from "../endpoints/backendRoute";

type PostingsProps = {
    category: string
}
export const PostingsView: FunctionComponent<PostingsProps> = ({ category }) => {

    const [postings, setPostings] = useState([]);

    useEffect(() => {
        fetch(backendRoute + '/posting/category', {
            headers: {
                'Category': category
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setPostings(data);
            });
    }, [category]);


    return(
        <div>
            <h1>{category}</h1>
            {postings.map((posting) => (
                <div
                    key={posting['_id']}
                    style={{
                        margin: 24,
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr', // modify the number of columns to suit your needs
                        gap: 16, // add some gap between the grid items
                        borderRadius: 16,
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.16)',
                        padding: 16,
                        backgroundColor: '#e0f2f1'
                    }}>
                    <h2>Posted by: {posting['username']}</h2>
                    <p>ID: {posting['_id']}</p>
                    {Object.entries(posting['fields']).map(([key, value]) => (
                        <div key={key}>
                            <div style={{ fontWeight: 'bold' }}>{key}</div>
                            <div>{String(value)}</div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
        )

};


export default PostingsView;