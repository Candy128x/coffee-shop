import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function MenuDetail({ match }) {

    useEffect(() => {
        fetchItem();
        console.log('---MenuItem-match---\n', match)
        console.log('---MenuItem-ID---\n', match.params)
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const data = await fetch(`https://api.openbrewerydb.org/breweries/${match.params.id}/`);
        const item = await data.json();
        console.log('---MenuDetail-items---\n', item);
        setItem(item);
    }

    return (
        <div className="App">
            <h3>Menu Detail</h3>
            <hr></hr>

            <div>
                <ul>
                    <li>{item.name}</li>
                    <li>{item.city}</li>
                    <li>{item.website_url}</li>
                </ul>
            </div>
        </div>
    );
}

export default MenuDetail;
