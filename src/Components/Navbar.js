import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <Link to="/" className='navbar-logo'>
                    Lighthouse Bistro <i class="fa-solid fa-fish"></i>
                </Link>

                <li className='nav-items'>
                    <Link to="/" className='nav-links'>
                        Home
                    </Link>
                    <Link to="/menu"
                        className='nav-links'>
                        Menu
                    </Link>
                    <Link to="/about" className='nav-links'>
                        About
                    </Link>
                </li>

                <button className='button-1'>
                    Reservations
                </button>
            </nav>
        </>
    )
}

export default Navbar