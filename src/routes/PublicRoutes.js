import { Navigate } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

function PublicRoute({ children, restricted = false, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return !isLoggedIn ? (
    children
  ) : (
    <Navigate to="/goit-react-hw-08-phonebook/phonebook" />
  );
}

export default PublicRoute;
