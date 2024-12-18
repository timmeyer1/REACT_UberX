import React, { useState } from 'react';
import StarField from '../../components/StarField';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstName, lastName, email, password } = formData;

        try {
            const response = await fetch('http://localhost:5000/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstName, lastName, email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                window.location.href = '/login'; // Rediriger vers la page de connexion
            } else {
                alert(data.message || "Erreur lors de l'inscription");
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert('Une erreur est survenue');
        }
    };

    return (
        <div className="bg-black text-white flex flex-col items-center pt-4">
            <StarField />
            <title>Uber X - Inscription</title>

            {/* Contenu principal */}
            <div className="relative z-10 flex flex-col items-center min-h-screen p-8">
                <h1 className="text-4xl font-bold mb-4 titre">Inscription</h1>
                <p className="text-lg max-w-2xl text-center mb-8">
                    Créez un compte pour rejoindre notre plateforme.
                </p>
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2" htmlFor="firstName">
                            Prénom
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Votre prénom"
                            required
                            className="w-full p-2 border border-gray-300 rounded text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2" htmlFor="lastName">
                            Nom
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Votre nom"
                            required
                            className="w-full p-2 border border-gray-300 rounded text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Votre email"
                            required
                            className="w-full p-2 border border-gray-300 rounded text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2" htmlFor="password">
                            Mot de passe
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Votre mot de passe"
                            required
                            className="w-full p-2 border border-gray-300 rounded text-black"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                            S'inscrire
                        </button>
                    </div>
                </form>
                <p className="text-gray-400 mt-6">
                    Vous avez déjà un compte ?{' '}
                    <Link to="/login" className="text-purple-600 hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        Connectez-vous
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
