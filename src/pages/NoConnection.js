import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Container, Col, Row, Spinner} from 'react-bootstrap';
import { FiFrown } from 'react-icons/fi';

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
    <Container className='d-flex justify-content-center align-items-center min-vh-100'>
      <Row>
        <Col className='d-flex flex-column justify-content-center align-items-center'>
          <FiFrown size={150} color='color-text-6' className='my-4' />
          <div className='fs-2 fw-bold color-text-6'>No Connection</div>
          <span>Please check your network and refresh page.</span>
          <Row className='d-flex justify-content-center align-items-center my-5'>
            <Spinner variant='warning' animation='grow'/>
            <Spinner variant='warning' animation='grow'/>
            <Spinner variant='warning' animation='grow'/>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default NoConnection;
