import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" classname='navbar-logo'>
                        Lighthouse Bistro
                        <i class="fa-solid fa-fish"></i>
                    </Link>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links'>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/menu" className='nav-links'>
                            Menu
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/hours" className='nav-links'>
                            Hours & Location
                        </Link>
                    </li>
                </div>
            </nav>
        </>
    )
}

export default Navbar