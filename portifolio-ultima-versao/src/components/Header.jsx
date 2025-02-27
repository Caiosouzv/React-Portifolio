import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header>
            <ul>
                <li id="kyo"> <a href="#main-top-mark"><span id="K">K</span>YO</a></li>
                <li id="space"></li>
                <li> <a href="#main-third-page">HABILIDADES</a></li>
                <li> <a href="#main-fourty-page">PROJETOS</a></li>
                <li> <a href="#main-fourty-page">CONTATO</a></li>
                
            </ul>
        </header>
    );
};

export default Header;