import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { store } from '../redux/store';
// export const PrivateAuthRoute = ({children}) => {
//   const token = useSelector((state)=>state.auth.token);
//   if(token){
//     return children;
//   }
//   return <Navigate to='/home/dashboard' replace state={{errorMsg: 'You are loggin now!!! Please logout first'}}/>;
// };

const PrivateRoute = ({children}) => {
  const token = useSelector(()=>store.getState().auth.token);
  if(token != null){
    return children;
  }
  return <Navigate to='/auth/login' />;
};

export default PrivateRoute;