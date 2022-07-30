import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateAuthRoute = ({children}) => {
  const authCheck = localStorage.getItem('auth');
  return authCheck ? (
    <Navigate to='/home/dashboard' replace state={{errorMsg: 'You are loggin now!!! Please logout first'}}/>    
  ) : (
    children
  );
};

function PrivateRoute({children}) {
  const authCheck = localStorage.getItem('auth-token');
  return authCheck ? (
    children
  ) : (
    <Navigate to='/auth/login' replace state={{errorMsg: 'You are not Login. Please Login first for access this page!!!'}}/>
  );
}

export default PrivateRoute;