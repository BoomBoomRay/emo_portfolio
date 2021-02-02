import React, { useState, useEffect, createContext } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <Context.Provider value={{ darkMode, handleDarkMode }}>
      {children}
    </Context.Provider>
  );
};

export { Provider, Context };
