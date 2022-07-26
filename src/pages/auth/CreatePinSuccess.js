import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import AuthBanner from '../../components/AuthBanner';
import TitleAuthForm from '../../components/TitleAuthForm';
import SuccessIcon from '../../assets/images/icons/success.png';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/reducers/auth';
import { useNavigate } from 'react-router-dom';

function CreatePinSuccess() {
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const token = useSelector(state => state.auth.token);
  const onDashboard = () => {
    if(token != null) {
      redirect('/home/dashboard');
    } else {
      dispatch(logout());
    }
  };
  return (
    <Row className='gx-0'>
      <AuthBanner />
      <Col
        xs={12}
        md={5}
        className='px-5 py-5 d-flex flex-column justify-content-center bg-white gap-5'
      >
        <div className='d-flex flex-column gap-5'>
          <div>
            <Image src={SuccessIcon} alt='success-icon' />
          </div>
          <TitleAuthForm
            title={'Your PIN Was Successfully Created'}
            subtitle={
              'Your PIN was successfully created and you can now access all the features in OurPocket. Login to your new account and start exploring!'
            }
          />
        </div>
        <Button onClick={onDashboard} className='btn bg-color-1 border-0 py-2'>Back to Dashboard</Button>
      </Col>
    </Row>
  );
}

export default CreatePinSuccess;
