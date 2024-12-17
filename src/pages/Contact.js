// src/pages/Contact.js
import React, { useState } from 'react';
import StarField from '../components/StarField';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Message envoyé par ${name} (${email}): ${message}`);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="relative bg-black text-white min-h-screen">
            <title>Uber X - Contact</title>
            {/* Arrière-plan étoilé */}
            <StarField />

            {/* Contenu principal */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
                <h1 className="text-4xl font-bold mb-4 titre">Contactez-Nous</h1>
                <p className="text-lg max-w-2xl text-center mb-8">
                    Nous serions ravis de recevoir vos questions ou commentaires.
                </p>
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2" htmlFor="name">Nom</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            rows="4"
                            className="w-full p-2 border border-gray-300 rounded text-black"
                        ></textarea>
                    </div>
                    <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                        Envoyer
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
