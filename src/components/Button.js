// src/components/Button.js
import React from 'react';

const Button = ({ href, children }) => {
    return (
        <a
            href={href}
            className="
                relative 
                inline-block 
                bg-purple-700 
                text-white 
                font-semibold 
                py-2 
                px-6 
                rounded-full 
                transition-all 
                duration-300 
                ease-in-out 
                shadow-md 
                hover:bg-purple-600 
                hover:shadow-lg
                focus:outline-none 
                focus:ring-2 
                focus:ring-purple-300
            "
        >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-800 opacity-30 rounded-full transform scale-110 transition-all duration-500 group-hover:scale-100"></span>
            <span className="relative z-10">{children}</span>
        </a>
    );
};

export default Button;
