import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assure-toi d'utiliser react-router-dom pour les liens
import StarField from '../../components/StarField';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;

        try {
            const response = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                // Sauvegarder le token JWT dans le localStorage
                localStorage.setItem('token', data.token);
                window.location.href = '/dashboard'; // Rediriger vers le tableau de bord ou la page principale
            } else {
                alert(data.message || 'Erreur lors de la connexion');
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert('Une erreur est survenue');
        }
    };

    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center pt-4">
            <StarField />
            <title>Uber X - Connexion</title>

            {/* Contenu principal */}
            <div className="relative z-10 flex flex-col items-center min-h-screen p-8">
                <h1 className="text-4xl font-bold mb-4 titre">Connexion</h1>
                <p className="text-lg max-w-2xl text-center mb-8">
                    Veuillez vous connecter pour accéder à votre compte.
                </p>
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2" htmlFor="password">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded text-black"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                            Se connecter
                        </button>
                    </div>
                </form>

                {/* Lien vers la page d'inscription */}
                <div className="mt-6">
                    <p className="text-gray-400">
                        Vous n'avez pas de compte ?{' '}
                        <Link to="/register" className="text-purple-600 hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            Créer un compte
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
