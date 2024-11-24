import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status from localStorage or any other persistent source
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    setIsAuthenticated(loggedIn);
  }, []);

  return isAuthenticated;
};

export default useAuth;
