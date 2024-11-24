
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './auth';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
