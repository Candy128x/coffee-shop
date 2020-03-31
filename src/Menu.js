import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';


function Menu() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://api.openbrewerydb.org/breweries');
    const items = await data.json();
    console.log('---Menu-items---\n', items)
    setItems(items);
  }

  return (
    <div className="App">
        <h3>Menu Page</h3>
        <hr></hr>

        <div>
          {items.map(item => (
            <h3 key={item.id}><Link to={`/menu/${item.id}/`}>{item.name}</Link></h3>
          ))}
        </div>
    </div>
  );
}

export default Menu;
