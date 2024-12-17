// src/pages/Home.js
import React, { useEffect, useRef } from 'react';
import StarField from '../components/StarField';

const AnimatedElement = ({ children, className }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <div ref={elementRef} className={`opacity-0 ${className}`}>
            {children}
        </div>
    );
};

const Home = () => {
    const pricingRef = useRef(null);

    const scrollToPricing = () => {
        if (pricingRef.current) {
            pricingRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-black text-white w-full max-w-full overflow-x-hidden">
            <title>Uber X - Accueil</title>
            {/* Section d'Introduction */}
            <section className="w-full h-screen flex flex-col items-center justify-center bg-black relative">
                <StarField />
                <AnimatedElement className="z-10">
                    <h1 className="text-6xl md:text-8xl font-bold text-center titre">
                        Uber <span className="text-purple-500">X</span>
                    </h1>
                </AnimatedElement>
                <AnimatedElement className="mt-8 z-10">
                    <p className="text-xl md:text-2xl text-center max-w-2xl px-4">
                        Profitez de services cloud de qualité à des prix imbattables.
                    </p>
                </AnimatedElement>
                <AnimatedElement className="mt-8 z-10">
                    <button
                        onClick={scrollToPricing}
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg md:text-xl transition-colors duration-300"
                    >
                        Découvrez Nos Services
                    </button>
                </AnimatedElement>
            </section>

            {/* Section Avantages */}
            <section className="w-full min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-black to-purple-900">
                <AnimatedElement className="mb-12 w-full">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-center titre">Pourquoi Choisir Nos Services ?</h2>
                    <p className="text-xl md:text-2xl max-w-4xl mx-auto text-center">
                        Nous offrons des solutions adaptées à vos besoins avec des performances optimales.
                    </p>
                </AnimatedElement>
                <AnimatedElement className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">
                    {[
                        {
                            title: 'Fiabilité',
                            message: 'Nos services sont disponibles 24/7, garantissant un temps de fonctionnement maximal.',
                        },
                        {
                            title: 'Sécurité',
                            message: 'Nous mettons en place des mesures de sécurité robustes. Vos données appartiennent à vous et vous seul.',
                        },
                        {
                            title: 'Prix Compétitifs',
                            message: 'Des tarifs transparents et abordables sans compromis sur la qualité.',
                        },
                    ].map((advantage, index) => (
                        <div key={index} className="bg-purple-800/30 p-6 rounded-lg backdrop-blur-sm transition-transform transform hover:scale-105">
                            <h3 className="text-2xl font-bold mb-2 text-center">{advantage.title}</h3>
                            <p className="text-center">{advantage.message}</p>
                        </div>
                    ))}
                </AnimatedElement>
            </section>


            {/* Section Témoignages */}
            <section className="w-full min-h-screen flex items-center justify-center bg-black p-8 relative overflow-hidden">
                <StarField />
                <AnimatedElement className="z-10 text-center w-full">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-4 titre">Nos Avis</h2>
                    <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8">
                        "Un service exceptionnel avec une assistance rapide !"
                    </p>
                    <p className="text-xl md:text-lg italic">— Vraiment bien 👍🏻</p>
                </AnimatedElement>
            </section>

            {/* Section Prix */}
            <section ref={pricingRef} className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 to-black p-8">
                <AnimatedElement className="text-center w-full">
                    <h2 className="text-5xl md:text-6xl font-bold mb-12 titre">Nos Abonnements</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                        {[
                            {
                                title: 'Starter',
                                price: '9.99€ / mois',
                                features: ['1 To de stockage', 'Support standard', 'Accès aux fonctionnalités de base'],
                            },
                            {
                                title: 'Pro',
                                price: '19.99€ / mois',
                                features: ['5 To de stockage', 'Support prioritaire', 'Accès à toutes les fonctionnalités'],
                                isBestOffer: true,
                            },
                            {
                                title: 'Enterprise',
                                price: '39.99€ / mois',
                                features: ['Illimité stockage', 'Support premium 24/7', 'Fonctionnalités avancées'],
                            },
                        ].map((plan, index) => (
                            <div key={index} className={`relative bg-gradient-to-br ${plan.isBestOffer ? 'from-purple-600 to-purple-800 scale-105 border-2 border-yellow-400' : 'from-purple-700 to-purple-900'} rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 flex flex-col h-full overflow-hidden`}>
                                {plan.isBestOffer && (
                                    <div className="absolute top-0 right-0 bg-yellow-400 text-purple-900 font-bold py-1 px-3 rounded-bl-xl text-sm">
                                        Meilleure Offre
                                    </div>
                                )}
                                <h3 className="text-3xl font-bold mb-4">{plan.title}</h3>
                                <p className="text-2xl font-semibold mb-6">{plan.price}</p>
                                <ul className="list-none mb-4 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="mb-2 flex items-center">
                                            <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <a href='/services' className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300">
                        Accéder aux offres
                    </a>
                </AnimatedElement>
            </section>


            {/* Section Appel à l'Action */}
            <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 to-black p-8">
                <AnimatedElement className="text-center w-full">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 titre">Rejoignez l'Aventure Cloud</h2>
                    <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8">
                        Ensemble, construisons un futur où la technologie améliore la vie de tous.
                    </p>
                    <a href="/services" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg md:text-xl transition-colors duration-300">
                        Commencez Votre Voyage
                    </a>
                </AnimatedElement>
            </section>


        </div>
    );
};

export default Home;
