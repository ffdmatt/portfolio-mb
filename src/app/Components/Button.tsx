'use client';
import React from 'react';

// Define a type for the Button props
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void; // The onClick event is optional
  className?: string; // Additional classes are also optional
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  const baseStyles = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition ease-in duration-200';

  return (
    <button
      onClick={onClick}
      type="button" // Specify the button type
      className={`${baseStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;