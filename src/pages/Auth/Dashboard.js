import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                // Récupération du token stocké dans le localStorage
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('Token manquant. Veuillez vous reconnecter.');
                }

                // Appel à l'API pour récupérer les données utilisateur
                const response = await axios.get('http://localhost:5000/auth/user', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                // Mise à jour de l'état avec les données utilisateur
                setUser(response.data);
            } catch (err) {
                console.error('Erreur lors de la récupération des données utilisateur :', err);
                setError('Impossible de récupérer les données utilisateur.');
            }
        };

        fetchUser(); // Appel initial
    }, []); // Exécution au premier rendu

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            {user ? (
                <div>
                    <h1>Bienvenue, {user.firstName} {user.lastName} !</h1>
                    <p>Email : {user.email}</p>
                </div>
            ) : (
                <p>Chargement...</p>
            )}
        </div>
    );
};

export default Dashboard;
