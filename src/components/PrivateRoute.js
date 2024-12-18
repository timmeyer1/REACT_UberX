import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token'); // Vérifie si un token est présent

    // Redirige vers /login si aucun token n'est trouvé
    return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
