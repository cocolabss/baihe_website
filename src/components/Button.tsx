import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

interface ButtonProps {
    color: string;
    text: string;
    onClick?: () => void;
    type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({ color, text, onClick, type = "button" }) => {
    const hoverColor =
        color === 'bg-green' ? 'hover:bg-red' :
            color === 'bg-red' ? 'hover:bg-green' : 'hover:bg-red';

    const fontSize = text === 'Contactar vía email' ? 'text-xs' : '';

    const isExpandableVerMas = text === 'Ver más';

    return (
        <button
            type={type}
            className={`
                flex items-center justify-center gap-2 group 
                ${isExpandableVerMas ? 'w-8 h-8' : 'px-6 py-2'} 
                ${isExpandableVerMas ? 'hover:w-auto hover:px-6' : ''} 
                overflow-hidden uppercase text-white 
                ${fontSize} rounded-full transition-all duration-300 ease-in-out
                ${color} ${hoverColor}
                relative
            `}
            onClick={onClick}
        >
            {!isExpandableVerMas && text}

            {isExpandableVerMas && (
                <>
                    <span className="opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto transition-all duration-300 ease-in-out whitespace-nowrap">
                        {text}
                    </span>
                    <FaChevronRight className="w-3 h-3 relative transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
                </>
            )}

            {!isExpandableVerMas && (
                <FaChevronRight className="w-3 h-3 transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
            )}
        </button>
    );
};

export default Button;