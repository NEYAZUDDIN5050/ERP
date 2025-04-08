import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user } = useAuth(); // Assuming your AuthContext provides a user object

    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

