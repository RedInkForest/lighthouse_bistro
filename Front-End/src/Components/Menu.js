import React from 'react';
import './Menu.css';
import dessert from './Images/cake.jpg';
import main from './Images/Octo.jpg';
import entree from './Images/Calamari.jpg';

function Menu() {
    return (
        <>
            <h1>MENU</h1>
            <div className='divider'></div>
            <div className='menu'>
                <div className='entree'>
                    <div className='items'>
                        <h2>Entree</h2>
                        <li>Calamari</li>
                        <li>Sauvignon Blanc-Steamed Mssels with Garlic Toast</li>
                        <li>Focacia Bread</li>
                        <li>Crispy Crab Cakes with Tomato Butter</li>
                    </div>
                    <img src={entree}/>
                </div>
                <div className='mains'>
                    <img src={main} />
                    <div className='items'>
                        <h2>Mains</h2>
                        <li>Salmon en Croute</li>
                        <li>Sauteed Scallops</li>
                        <li>Fish Head Curry</li>
                        <li>Grilled Octuopus</li>
                    </div>
                </div>
                <div className='dessert'>
                    <div className='items'>
                        <h2>Dessert</h2>
                        <li>Tres Leche</li>
                        <li>Macaroons</li>
                        <li>Souffle</li>
                        <li>Cake of the Day</li>
                    </div>
                    <img src={dessert} />
                </div>
            </div>
        </>
    )
}

export default Menu