// src/components/Header.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuVariants = {
        hidden: {
            opacity: 0,
            y: -50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        },
        exit: {
            opacity: 0,
            y: -50,
            scale: 0.9,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <header className="bg-black backdrop-blur-sm text-white py-4 px-6 shadow-lg top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold tracking-tight titre">
                    <a href='/'>
                        <span className="text-white">Uber</span>
                        <span className="text-purple-500"> X</span>
                    </a>
                </h1>
                <nav className="hidden md:block">
                    <ul className="flex space-x-4">
                        <li><Button href="/">Accueil</Button></li>
                        <li><Button href="/services">Abonnements</Button></li>
                        <li><Button href="/contact">Contact</Button></li>
                    </ul>
                </nav>
                <button
                    onClick={toggleMenu}
                    className="md:hidden focus:outline-none"
                >
                    <svg
                        className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        key="mobile-menu"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        className="md:hidden absolute left-0 right-0 top-full bg-black/90 backdrop-blur-sm"
                    >
                        <ul className="flex flex-col items-center space-y-4 py-6">
                            <li><Button href="/">Accueil</Button></li>
                            <li><Button href="/services">Abonnements</Button></li>
                            <li><Button href="/contact">Contact</Button></li>
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
