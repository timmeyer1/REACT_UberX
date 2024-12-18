import React, { useState, useEffect } from 'react';

const Payment = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        name: ''
    });

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const serviceParam = urlParams.get('service');
        if (serviceParam) {
            const decodedService = JSON.parse(decodeURIComponent(serviceParam));
            setSelectedService(decodedService);
        }
    }, []);

    const handleInputChange = (e) => {
        setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique de traitement du paiement ici
        console.log('Paiement soumis', { service: selectedService, paymentInfo });

        // Simuler un délai de chargement
        setTimeout(() => {
            alert('Paiement traité avec succès !');
            window.location.href = '/'; // Redirection vers la page d'accueil
        }, 1000);
    };

    const handleGoBack = () => {
        window.history.back();
    };

    if (!selectedService) return <div>Chargement...</div>;

    return (
        <div className="bg-gray-50 min-h-screen pt-4">
            <title>Uber X - Paiement</title>
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Finaliser votre commande</h1>
                <div className="flex flex-col md:flex-row md:gap-8">
                    {/* Informations du service */}
                    <div className="md:w-2/3 bg-white p-8 rounded-lg shadow-xl">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">{selectedService.title}</h3>
                        <p className="text-xl mb-4 text-green-600">{selectedService.price}</p>
                        <div className="mb-6">
                            <h4 className="text-lg font-semibold mb-2 text-gray-800">Caractéristiques du service :</h4>
                            <ul className="list-disc list-inside text-gray-700">
                                {selectedService.features.map((feature, index) => (
                                    <li key={index} className="mb-1">{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-6">
                            <h4 className="text-lg font-semibold mb-2 text-gray-800">Description détaillée :</h4>
                            <p className="text-gray-700">
                                Notre service {selectedService.title} offre une solution cloud complète pour répondre à tous vos besoins en matière de stockage et de traitement de données. Avec une interface intuitive et des fonctionnalités avancées, vous bénéficierez d'une expérience utilisateur optimale et d'une sécurité de premier ordre.
                            </p>
                        </div>
                        <div className="mb-6">
                            <h4 className="text-lg font-semibold mb-2 text-gray-800">Pourquoi choisir ce service ?</h4>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Performance et fiabilité inégalées</li>
                                <li>Support client 24/7</li>
                                <li>Mises à jour régulières et nouvelles fonctionnalités</li>
                                <li>Compatibilité avec de nombreux outils et plateformes</li>
                            </ul>
                        </div>
                    </div>

                    {/* Formulaire de paiement */}
                    <div className="md:w-1/3 bg-white p-8 rounded-lg shadow-xl mt-6 md:mt-0">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Informations de paiement</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block mb-2 text-gray-700" htmlFor="cardNumber">Numéro de carte</label>
                                <input
                                    type="text"
                                    id="cardNumber"
                                    name="cardNumber"
                                    value={paymentInfo.cardNumber}
                                    onChange={handleInputChange}
                                    placeholder="1234 5678 9012 3456"
                                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            </div>
                            <div className="mb-4 flex gap-4">
                                <div className="flex-1">
                                    <label className="block mb-2 text-gray-700" htmlFor="expiryDate">Date d'expiration</label>
                                    <input
                                        type="text"
                                        id="expiryDate"
                                        name="expiryDate"
                                        value={paymentInfo.expiryDate}
                                        onChange={handleInputChange}
                                        placeholder="MM/AA"
                                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block mb-2 text-gray-700" htmlFor="cvv">CVV</label>
                                    <input
                                        type="text"
                                        id="cvv"
                                        name="cvv"
                                        value={paymentInfo.cvv}
                                        onChange={handleInputChange}
                                        placeholder="123"
                                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-gray-700" htmlFor="name">Nom sur la carte</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={paymentInfo.name}
                                    onChange={handleInputChange}
                                    placeholder="Nom complet"
                                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            </div>
                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition duration-300 mb-4">
                                Payer {selectedService.price}
                            </button>
                        </form>
                        <button onClick={handleGoBack} className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-4 rounded-lg transition duration-300">
                            Revenir en arrière
                        </button>
                        <div className="mt-4 text-center text-sm text-gray-600">
                            <p>Paiement sécurisé par SSL</p>
                            <div className="mt-2">
                                <img src="/images/ssl-icon.png" alt="SSL Logo" className="inline-block h-8" />
                                <img src="/images/public-payment.png" alt="Secure Payments" className="inline-block h-8 ml-4" />
                                <img src="/images/rspenv.png" alt="Respect environnemental" className="inline-block h-8 ml-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
