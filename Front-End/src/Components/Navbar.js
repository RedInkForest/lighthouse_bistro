import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import Modal from './Modal';

function Navbar() {
    return (
        <div className='navbar_container'>
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
                    <Link to="hours" spy={true} smooth={true} offset={50} duration={500}
                    className='nav-links'>
                        Info
                    </Link>
                </li>

                <div className='hate'>
                    <Modal></Modal>
                </div>
            </nav>
        </div>
    )
}

export default Navbar