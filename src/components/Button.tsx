import React from 'react';

interface ButtonProps {
    color: string;
    text: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ color, text, onClick }) => {
    const hoverColor =
        color === 'bg-green' ? 'hover:bg-red' :
            color === 'bg-red' ? 'hover:bg-green' : 'hover:bg-red';
        
    const fontSize =
        text === 'Ver más' ? 'text-xs' : 
            text === 'Contactar vía email' ? 'text-xs' : '';
                    
    return (
        <button
            className={`px-6 py-2 uppercase text-white ${fontSize} rounded-full transition-colors duration-300 ${color} ${hoverColor}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;