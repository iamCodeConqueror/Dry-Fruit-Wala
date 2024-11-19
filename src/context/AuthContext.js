import React, { createContext, useState, useEffect } from 'react';

// 1. Create the context
export const AuthContext = createContext();

// 2. Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user state will hold the logged-in user's data
  

  // Check localStorage for existing user
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Function to log in the user
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Persist user in localStorage
  };

  // Function to log out the user
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove user data from localStorage
  };
  
  // 3. Provide context to children
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
