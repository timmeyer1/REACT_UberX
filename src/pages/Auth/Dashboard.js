import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaUserCircle, FaCog, FaCloud } from 'react-icons/fa'; // Icônes
import StarField from '../../components/StarField';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [activeMenu, setActiveMenu] = useState('overview');

    const cloudData = {
        used: 65,
        total: 100,
        growth: [10, 20, 35, 50, 65],
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) throw new Error('Token manquant. Veuillez vous reconnecter.');

                const response = await axios.get('http://localhost:5000/auth/user', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(response.data);
            } catch (err) {
                console.error('Erreur utilisateur :', err);
                setError('Impossible de récupérer les données utilisateur.');
            }
        };
        fetchUser();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    const renderContent = () => {
        switch (activeMenu) {
            case 'overview':
                return (
                    <div className="space-y-8">
                        <title>Uber X - Dashboard</title>
                        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 flex items-center gap-6">
                            <div className="w-1/4">
                                <CircularProgressbar
                                    value={cloudData.used}
                                    text={`${cloudData.used}%`}
                                    styles={buildStyles({
                                        textColor: '#fff',
                                        pathColor: '#7C3AED',
                                        trailColor: '#4C1D95',
                                    })}
                                />
                            </div>
                            <div className="flex-1 text-white">
                                <h3 className="text-2xl font-semibold mb-2">Espace Cloud Utilisé</h3>
                                <p className="text-purple-200">Total : <span className="font-bold">{cloudData.total} GB</span></p>
                                <p className="text-purple-200">Utilisé : <span className="font-bold">{(cloudData.total * cloudData.used) / 100} GB</span></p>
                                <p className="text-purple-200">Restant : <span className="font-bold">{cloudData.total - (cloudData.total * cloudData.used) / 100} GB</span></p>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6">
                            <h3 className="text-2xl font-semibold text-white mb-4">Progression d'utilisation</h3>
                            <div className="flex gap-2">
                                {cloudData.growth.map((value, index) => (
                                    <div
                                        key={index}
                                        className="flex-1 bg-purple-500 rounded-md"
                                        style={{ height: `${value}%` }}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'profile':
                return (
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6">
                        <h3 className="text-2xl font-semibold text-white mb-4">Profil</h3>
                        <p className="text-purple-200">Nom : {user?.lastName}</p>
                        <p className="text-purple-200">Prénom : {user?.firstName}</p>
                        <p className="text-purple-200">Email : {user?.email}</p>
                    </div>
                );
            case 'settings':
                return (
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6">
                        <h3 className="text-2xl font-semibold text-white mb-4">Paramètres</h3>
                        <p className="text-purple-200">Gérez vos préférences ici.</p>
                    </div>
                );
            default:
                return <p className="text-purple-200">Sélectionnez un onglet pour voir son contenu.</p>;
        }
    };

    return (
        <div className="bg-black/85 text-white min-h-screen flex flex-col md:flex-row">
            {/* Menu latéral avec icônes */}
            <div className="bg-black/10 w-full md:w-64 p-6 flex flex-col space-y-6 shadow-[10px_10px_15px_rgba(0,0,0,0.2)] rounded-xl">
                <h1 className="text-3xl font-bold text-center text-white mb-6">Tableau de bord</h1>
                <nav className="flex flex-col space-y-4">
                    <button
                        onClick={() => setActiveMenu('overview')}
                        className={`py-2 px-4 rounded-lg transition-all ${activeMenu === 'overview' ? 'bg-purple-700' : 'hover:bg-purple-800'} flex items-center gap-4`}
                    >
                        <FaCloud size={20} /> Vue d'ensemble
                    </button>
                    <button
                        onClick={() => setActiveMenu('profile')}
                        className={`py-2 px-4 rounded-lg transition-all ${activeMenu === 'profile' ? 'bg-purple-700' : 'hover:bg-purple-800'} flex items-center gap-4`}
                    >
                        <FaUserCircle size={20} /> Profil
                    </button>
                    <button
                        onClick={() => setActiveMenu('settings')}
                        className={`py-2 px-4 rounded-lg transition-all ${activeMenu === 'settings' ? 'bg-purple-700' : 'hover:bg-purple-800'} flex items-center gap-4`}
                    >
                        <FaCog size={20} /> Paramètres
                    </button>
                </nav>
                <button
                    onClick={handleLogout}
                    className="mt-auto bg-red-600 hover:bg-red-700 py-2 px-4 rounded-lg text-white flex items-center gap-4"
                >
                    Déconnexion
                </button>
            </div>

            {/* Contenu principal */}
            <div className="flex-1 p-8 overflow-y-auto">
                {error ? (
                    <p className="text-red-500 text-center">{error}</p>
                ) : user ? (
                    <>
                        <h2 className="text-3xl font-bold mb-8">Bienvenue, {user.firstName} 👋</h2>
                        {renderContent()}
                    </>
                ) : (
                    <p className="text-center text-purple-200">Chargement...</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
