// src/components/Header.js
import React from 'react';
import Button from './Button';

const Header = () => {
    return (
        <header className="bg-black backdrop-blur-sm text-white py-4 px-6 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold tracking-tight">
                    <a href='/'>
                        <span className="text-white">Uber</span>
                        <span className="text-purple-500"> X</span>
                    </a>
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Button href="/">Accueil</Button></li>
                        <li><Button href="/about">À propos</Button></li>
                        <li><Button href="/contact">Contact</Button></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
