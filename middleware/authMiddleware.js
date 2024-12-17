// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Récupère le token du header
    if (!token) {
        return res.status(401).json({ message: 'Token manquant ou invalide' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId; // Ajoute l'ID utilisateur à la requête
        next(); // Passe au prochain middleware ou à la route
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Token invalide ou expiré' });
    }
};

module.exports = authMiddleware;
