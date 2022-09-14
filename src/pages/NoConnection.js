import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoConnection = () => {
  const navigate = useNavigate();
  const [isOnline, setIsOnline] = React.useState(window.navigator.onLine);
  React.useEffect(()=>{
    setIsOnline(window.navigator.onLine);
    if (isOnline) {  
      navigate(-1);
    }
  }, [isOnline, navigate]);
  return (
    <div>NoConnection</div>
  );
};

export default NoConnection;
