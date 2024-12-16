import React, { useEffect, useState } from 'react';

const StarField = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Génération des étoiles
    const generatedStars = [...Array(100)].map(() => ({
      size: Math.random() * 3 + 1, // Taille entre 1px et 4px
      color: `rgba(255, 255, 255, ${Math.random() * 0.7 + 0.3})`, // Plus lumineux (opacité entre 0.3 et 1.0)
      x: Math.random() * 100, // Position X initiale (en pourcentage)
      y: Math.random() * 100, // Position Y initiale (en pourcentage)
      speed: Math.random() * 10 + 5, // Durée de l'animation entre 5s et 15s
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: `radial-gradient(circle, ${star.color} 0%, transparent 70%)`,
            borderRadius: '50%',
            left: `${star.x}%`,
            top: `${star.y}%`,
            animation: `move ${star.speed}s linear infinite`,
          }}
        ></div>
      ))}

      {/* Déclaration des animations */}
      <style jsx>{`
        @keyframes move {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-100vh); /* Les étoiles montent */
          }
        }
      `}</style>
    </div>
  );
};

export default StarField;
