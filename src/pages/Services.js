// src/pages/Services.js
import React from 'react';
import StarField from '../components/StarField';

const ServiceCard = ({ title, price, features, buttonText, isBestOffer, onSelect }) => (
    <div className={`relative bg-gradient-to-br ${isBestOffer ? 'from-purple-600 to-purple-800 scale-105' : 'from-purple-700 to-purple-900'} rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 flex flex-col h-full overflow-hidden ${isBestOffer ? 'border-4 border-yellow-400' : ''}`}>
        {isBestOffer && (
            <div className="absolute top-0 right-0 bg-yellow-400 text-purple-900 font-bold py-2 px-4 rounded-bl-xl">
                Meilleure Offre
            </div>
        )}
        <h3 className="text-4xl font-bold mb-6 text-center z-10">{title}</h3>
        <p className="text-2xl font-semibold mb-8 text-center z-10">{price}</p>
        <ul className="mb-8 list-disc list-inside z-10 text-lg">
            {features.map((feature, index) => (
                <li key={index} className="mb-3">{feature}</li>
            ))}
        </ul>
        <button 
            onClick={onSelect}
            className={`${isBestOffer ? 'bg-yellow-400 text-purple-900 hover:bg-yellow-500' : 'bg-purple-600 hover:bg-purple-700'} text-lg font-bold py-4 px-8 rounded-full transition-colors duration-300 mt-auto z-10`}
        >
            {buttonText}
        </button>
    </div>
);

const Services = () => {
    const services = [
        {
            title: "Cloud Starter",
            price: "9.99€ / mois",
            features: [
                "1 To de stockage",
                "Support par email",
                "Sauvegarde quotidienne",
                "Accès aux fonctionnalités de base"
            ],
            buttonText: "Chosir ce plan"
        },
        {
            title: "Cloud Pro",
            price: "19.99€ / mois",
            features: [
                "5 To de stockage",
                "Support prioritaire 24/7",
                "Sauvegarde en temps réel",
                "Outils d'analyse avancés"
            ],
            buttonText: "Choisir ce plan",
            isBestOffer: true
        },
        {
            title: "Cloud Enterprise",
            price: "49.99€ / mois",
            features: [
                "Stockage illimité",
                "Support dédié et personnalisé",
                "Haute disponibilité garantie",
                "Sécurité renforcée et conformité"
            ],
            buttonText: "Choisir ce plan"
        }
    ];

    const handleSelectService = (service) => {
        const encodedService = encodeURIComponent(JSON.stringify(service));
        window.location.href = `/payment?service=${encodedService}`;
    };

    return (
        <div className="bg-black text-white min-h-screen">
            <title>Uber X - Nos Services</title>
            <StarField />
            <div className="container mx-auto px-4 py-20 relative z-10">
                <h1 className="text-6xl font-bold text-center mb-16 titre">Nos Services Cloud</h1>
                <p className="text-xl text-center max-w-xl mx-auto mb-20">
                    Découvrez nos offres de services cloud conçues pour répondre à tous vos besoins, de la petite entreprise à la grande organisation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {services.map((service, index) => (
                        <ServiceCard 
                            key={index} 
                            {...service} 
                            isBestOffer={index === 1}
                            onSelect={() => handleSelectService(service)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
