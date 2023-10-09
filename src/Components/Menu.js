import React from 'react';
import './Menu.css';

function Menu() {
    return (
        <div className='menu'>
            <div className='entree'>
                <div className='items'>
                    <h1>Entree</h1>
                    <li>Calamari</li>
                    <li>Sauvignon Blanc-Steamed MUssels with Garlic Toast</li>
                    <li>Focacia Bread</li>
                    <li>Crispy Crab Cakes with Tomato Butter</li>
                </div>
                <img src='./images/' />
            </div>
            <div className='mains'>
                <img src='./images/' />
                <div className='items'>
                    <h1>Entree</h1>
                    <li>Calamari</li>
                    <li>Sauvignon Blanc-Steamed MUssels with Garlic Toast</li>
                    <li>Focacia Bread</li>
                    <li>Crispy Crab Cakes with Tomato Butter</li>
                </div>
            </div>
            <div className='dessert'>
                <div className='items'>
                    <h1>Entree</h1>
                    <li>Calamari</li>
                    <li>Sauvignon Blanc-Steamed MUssels with Garlic Toast</li>
                    <li>Focacia Bread</li>
                    <li>Crispy Crab Cakes with Tomato Butter</li>
                </div>
                <img src='./images/' />
            </div>
        </div>
    )
}

export default Menu