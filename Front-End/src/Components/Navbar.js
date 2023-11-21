import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <Link to="/" className='navbar-logo'>
                    Lighthouse Bistro <i class="fa-solid fa-fish"></i>
                </Link>

                <li className='nav-items'>
                    <Link to='hero' spy={true} smooth={true} offset={50} duration={500} 
                        className='nav-links'>
                        Home
                    </Link>
                    <Link to='menu' spy={true} smooth={true} offset={50} duration={500}
                        className='nav-links'>
                        Menu
                    </Link>
                    <Link to="about" spy={true} smooth={true} offset={50} duration={500}
                    className='nav-links'>
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