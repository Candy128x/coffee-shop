import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function Nav() {
    
    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <h3>logo</h3>
            <ul className="nav-links">
                <Link style={navStyle} to="/"><li>Home</li></Link>
                <Link style={navStyle} to="/menu"><li>Menu</li></Link>
                <Link style={navStyle} to="/about"><li>About us</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;