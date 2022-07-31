import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export const PrivateAuthRoute = ({children}) => {
  const token = useSelector((state)=>state.auth.token);
  if(!token){
    return children;
  }
  return <Navigate to='/home/dashboard' replace state={{errorMsg: 'You are loggin now!!! Please logout first'}}/>;
};

function PrivateRoute({children}) {
  const token = useSelector((state)=>state.auth.token);
  if(token){
    return children;
  }
  return <Navigate to='/auth/login' replace state={{errorMsg: 'You are not Login. Please Login first for access this page!!!'}}/>;
}

export default PrivateRoute;