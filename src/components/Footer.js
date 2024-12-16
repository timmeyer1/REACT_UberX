// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Section Navigation */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                        <ul>
                            <li><a href="/" className="hover:text-purple-500">Accueil</a></li>
                            <li><a href="/about" className="hover:text-purple-500">À Propos</a></li>
                            <li><a href="/services" className="hover:text-purple-500">Services</a></li>
                            <li><a href="/contact" className="hover:text-purple-500">Contact</a></li>
                        </ul>
                    </div>

                    {/* Section Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contactez-Nous</h3>
                        <p>Email : <a href="mailto:contact@votreentreprise.com" className="text-purple-500">contact@uberx.com</a></p>
                        <p>Téléphone : à mettre</p>
                    </div>

                    {/* Section Réseaux Sociaux */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Suivez-Nous</h3>
                        <ul className="flex space-x-4">
                            <li><a href="#" className="hover:text-purple-500">Facebook</a></li>
                            <li><a href="#" className="hover:text-purple-500">Twitter</a></li>
                            <li><a href="#" className="hover:text-purple-500">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-purple-500">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                {/* Section Mentions Légales et Copyright */}
                <div className="mt-8 text-center">
                    <p>&copy; {new Date().getFullYear()} Votre Entreprise. Tous droits réservés.</p>
                    <p><a href="/privacy-policy" className="hover:text-purple-500">Politique de confidentialité</a> | <a href="/terms-of-service" className="hover:text-purple-500">Conditions d'utilisation</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
