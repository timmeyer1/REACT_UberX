// src/pages/About.js
import React from 'react';
import StarField from '../components/StarField';

const About = () => {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center p-8">
            <title>Uber X - À Propos</title>
            <StarField />
            <h1 className="text-4xl font-bold mb-4">À Propos de Nous</h1>
            <p className="text-lg max-w-2xl text-center mb-8">
                Nous sommes un fournisseur de services cloud dédié à l'innovation et à l'excellence. Notre mission est de fournir des solutions cloud fiables et sécurisées qui améliorent la productivité et la collaboration.
            </p>
            
            <section className="mb-12 text-center">
                <h2 className="text-3xl font-semibold mb-4">Notre Mission</h2>
                <p className="text-lg max-w-2xl mx-auto mb-8">
                    Offrir des services cloud de qualité qui permettent aux entreprises de se concentrer sur leur croissance tout en bénéficiant d'une infrastructure technologique robuste.
                </p>
            </section>

            <section className="mb-12 text-center">
                <h2 className="text-3xl font-semibold mb-4">Nos Valeurs</h2>
                <p className="text-lg max-w-2xl mx-auto mb-8">
                    Nous croyons en l'innovation, la sécurité et le service client. Chaque décision que nous prenons est guidée par ces valeurs fondamentales, garantissant ainsi la satisfaction de nos utilisateurs.
                </p>
            </section>

            <section className="mb-12 text-center">
                <h2 className="text-3xl font-semibold mb-4">Notre Équipe</h2>
                <p className="text-lg max-w-2xl mx-auto mb-8">
                    Notre équipe est composée d'experts en technologie cloud, passionnés par l'optimisation des performances et la sécurité des données. Ensemble, nous travaillons pour offrir des solutions qui répondent aux besoins uniques de nos clients.
                </p>
            </section>

            <section className="text-center">
                <h2 className="text-3xl font-semibold mb-4">Contactez-Nous</h2>
                <p className="text-lg max-w-2xl mx-auto">
                    Vous avez des questions sur nos services cloud ? Contactez-nous à l'adresse : 
                    <a href="mailto:contact@votreentreprise.com" className="text-purple-500"> contact@uberx.com</a>.
                </p>
            </section>
        </div>
    );
};

export default About;
