import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuVariants = {
        hidden: { opacity: 0, y: -50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 300, damping: 20 }
        },
        exit: {
            opacity: 0,
            y: -50,
            scale: 0.9,
            transition: { duration: 0.2 }
        }
    };

    return (
        <header className="bg-black/90 backdrop-blur-lg text-white py-3 px-6 shadow-lg z-50 fixed md:relative w-full">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-2xl font-bold tracking-tight titre">
                    <a href="/" className="flex items-center">
                        <span className="text-white">Uber</span>
                        <span className="text-purple-500"> X</span>
                    </a>
                </h1>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 items-center">
                    <a
                        href="/"
                        className="text-gray-300 hover:text-purple-500 transition-colors duration-300 text-sm uppercase tracking-wider"
                    >
                        Accueil
                    </a>
                    <a
                        href="/services"
                        className="text-gray-300 hover:text-purple-500 transition-colors duration-300 text-sm uppercase tracking-wider"
                    >
                        Abonnements
                    </a>
                    <a
                        href="/contact"
                        className="text-gray-300 hover:text-purple-500 transition-colors duration-300 text-sm uppercase tracking-wider"
                    >
                        Contact
                    </a>
                    <a
                        href="/dashboard"
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    >
                        Ouvrir Cloud
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden focus:outline-none">
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

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        key="mobile-menu"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        className="md:hidden absolute left-0 right-0 top-full bg-black/90 backdrop-blur-md"
                    >
                        <ul className="flex flex-col items-center space-y-4 py-6">
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-300 hover:text-purple-500 transition-colors duration-300 text-sm uppercase tracking-wider"
                                >
                                    Accueil
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/services"
                                    className="text-gray-300 hover:text-purple-500 transition-colors duration-300 text-sm uppercase tracking-wider"
                                >
                                    Abonnements
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="text-gray-300 hover:text-purple-500 transition-colors duration-300 text-sm uppercase tracking-wider"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/dashboard"
                                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg"
                                >
                                    Ouvrir Cloud
                                </a>
                            </li>
                            <li>
                                <button
                                    onClick={handleLogout}
                                    className="mt-auto bg-red-600 hover:bg-red-700 py-2 px-4 rounded-lg text-center"
                                >
                                    Déconnexion
                                </button>
                            </li>
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
