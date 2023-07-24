import React, { useEffect } from 'react';
import RegisterForm from './Register/RegisterForm';
import Login from './Login/Login';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { Routes, Route } from 'react-router-dom';
import Container from './Container/Container';
import AppBar from './AppBar/AppBar';
import PhonebookView from 'pages/PhonebookView';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoutes';
import HomePage from 'pages/HomePage';
import { Navigate } from 'react-router-dom';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Routes>
        <Route
          exact
          path="/goit-react-hw-08-phonebook/"
          restricted
          element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          }
        />

        <Route
          path="/goit-react-hw-08-phonebook/phonebook"
          element={
            <PrivateRoute>
              <PhonebookView />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/goit-react-hw-08-phonebook/login"
          restricted
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="/goit-react-hw-08-phonebook/register"
          restricted
          element={
            <PublicRoute>
              <RegisterForm />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="/*"
          element={<Navigate to="/goit-react-hw-08-phonebook/" />}
        />
      </Routes>
    </Container>
  );
}
