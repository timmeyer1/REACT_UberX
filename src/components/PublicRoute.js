import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const token = localStorage.getItem('token'); // Vérifie si un token est présent

    // Redirige vers /dashboard si l'utilisateur est déjà connecté
    return token ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute;
