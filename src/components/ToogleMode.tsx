import { useState, useEffect } from 'react';
import { Sun } from "./icons/Sun";
import { Moon } from "./icons/Moon";

export const ToogleMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode]);

  return (
    <button className="btn btn-ghost" onClick={toggleMode}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
      {!darkMode ? <Moon /> : <Sun />}
    </button>
  );
};