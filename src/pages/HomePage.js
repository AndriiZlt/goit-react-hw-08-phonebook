import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import authSelectors from 'redux/auth/auth-selectors';
import Login from 'components/Login/Login';

const HomePage = () => {
  const isAuth = useSelector(authSelectors.getIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    isAuth && navigate('/');
  }, [isAuth, navigate]);

  return <Login />;
};

export default HomePage;
