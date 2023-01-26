import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavigationBar.css';
const NavigationBar = () => {
    return (
        
            <ul className="nav-links">
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/menu">MENU</Link>
                </li>
                <li>
                    <Link to="/gallery">GALLERY</Link>
                </li>
                <li>
                    <Link to="/events">EVENTS</Link>
                </li>
                <li>
                    <Link to="/contact">CONTACT</Link>
                </li>
            </ul>
       
    );
}

export default NavigationBar;