// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-black/90 to-zinc-950 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
                    {/* Section Navigation */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-xl font-bold mb-4 text-purple-400">Navigation</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-purple-400 transition-colors duration-300">Accueil</a></li>
                            <li><a href="/about" className="hover:text-purple-400 transition-colors duration-300">À Propos</a></li>
                            <li><a href="/services" className="hover:text-purple-400 transition-colors duration-300">Services</a></li>
                            <li><a href="/contact" className="hover:text-purple-400 transition-colors duration-300">Contact</a></li>
                        </ul>
                    </div>

                    {/* Section Contact */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-xl font-bold mb-4 text-purple-400">Contactez-Nous</h3>
                        <p className="mb-2">Email : <a href="mailto:contact@uberx.com" className="text-purple-400 hover:underline">contact@uberx.com</a></p>
                        <p>Téléphone : +33 1 23 45 67 89</p>
                    </div>

                    {/* Section Réseaux Sociaux */}
                    <div className="text-center sm:text-left">
                        <h3 className="text-xl font-bold mb-4 text-purple-400">Suivez-Nous</h3>
                        <ul className="flex justify-center sm:justify-start space-x-4">
                            <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Facebook</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Twitter</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                {/* Section Mentions Légales et Copyright */}
                <div className="border-t border-gray-700 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Uber X. Tous droits réservés.</p>
                    <p className="mt-2">
                    <a href="/privacy" className="hover:text-purple-400 transition-colors duration-300">Politique de confidentialité</a> | <a href="/terms" className="hover:text-purple-400 transition-colors duration-300">Conditions d'utilisation</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
