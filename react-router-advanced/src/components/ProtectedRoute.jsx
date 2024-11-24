
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Import the useAuth hook

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth(); // Check authentication status

  // If the user is not authenticated, redirect them to the home page (or login page)
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  // If authenticated, render the children (protected components)
  return children;
};

export default ProtectedRoute;
