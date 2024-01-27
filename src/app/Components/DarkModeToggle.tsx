'use client';
import React from "react";

const DarkModeToggle: React.FC = () => {
    const [darkMode, setDarkMode] = React.useState<boolean>(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <button onClick={toggleDarkMode} className="p-2 rounded-md bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200">
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    );
};

export default DarkModeToggle;