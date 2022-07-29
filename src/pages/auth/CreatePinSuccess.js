import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import AuthBanner from '../../components/AuthBanner';
import TitleAuthForm from '../../components/TitleAuthForm';
import ButtonAuth from '../../components/ButtonAuth';
import SuccessIcon from '../../assets/images/icons/success.png';

function CreatePinSuccess() {
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
        <ButtonAuth link={'/auth/login'} textButton={'Login Now'} />
      </Col>
    </Row>
  );
}

export default CreatePinSuccess;
