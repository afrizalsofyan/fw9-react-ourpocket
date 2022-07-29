import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import AuthBanner from '../../components/AuthBanner';
import TitleAuthForm from '../../components/TitleAuthForm';
import { ButtonSubmit } from '../../components/ButtonAuth';
import { InputPin } from '../../components/InputField';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { createPin } from '../../redux/reducers/user';

const CreatePinForm = ({ errors, handleSubmit, handleChange }) => {
  // const arrError = [0,1,2,3,4,5];
  return (
    <Form
      className='d-flex flex-column gap-5'
      noValidate
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <div className='d-flex flex-row pin-wrapper gap-2 gap-md-2 gap-lg-4 justify-content-center'>
        <InputPin
          name='pin1'
          type='text'
          // isInvalid={!!errors.pin1}
        />
        <InputPin
          name='pin2'
          type='text'
          // isInvalid={!!errors.pin2}
        />
        <InputPin
          name='pin3'
          type='text'
          // isInvalid={!!errors.pin3}
        />
        <InputPin
          name='pin4'
          type='text'
          // isInvalid={!!errors.pin4}
        />
        <InputPin
          name='pin5'
          type='text'
          // isInvalid={!!errors.pin5}
        />
        <InputPin
          name='pin6'
          type='text'
          // isInvalid={!!errors.pin6}
        />
      </div>
      <ButtonSubmit textButton={'Confirm'} />
    </Form>
  );
};

function CreatePin() {
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const submitPin = (value) => {
    if(value.pin1 === '' || value.pin2 === '' || value.pin3 === '' || value.pin4 === '' || value.pin5 === '' || value.pin6 === ''){
      window.alert('Value is required');
    } else {
      if (isNaN(parseInt(value.pin1)) === false && isNaN(parseInt(value.pin2)) === false && isNaN(parseInt(value.pin3)) === false && isNaN(parseInt(value.pin4)) === false && isNaN(parseInt(value.pin5)) === false && isNaN(parseInt(value.pin6)) === false){
        const joinPin = value.pin1 + value.pin2 + value.pin3 + value.pin4 + value.pin5 + value.pin6;
        dispatch(createPin(parseInt(joinPin)));
        redirect('/auth/create-pin-success');
      } else {
        window.alert('Please input with only number !!!');
      }
    }
    
  };
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Register - Create Pin</title>
        </Helmet>
      </HelmetProvider>
      <Row className='gx-0'>
        <AuthBanner />
        <Col
          xs={12}
          md={5}
          className={'px-5 py-5 d-flex flex-column justify-content-center bg-white gap-5'}
        >
          <div className='d-flex flex-column gap-5'>
            <TitleAuthForm
              title={
                'Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users'
              }
              subtitle={
                'Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!'
              }
            />
            <Formik
              onSubmit={submitPin}
              initialValues={{
                pin1: '',
                pin2: '',
                pin3: '',
                pin4: '',
                pin5: '',
                pin6: '',
              }}
              // validationSchema={createPinSchema}
            >
              {(props) => <CreatePinForm {...props}/>}
            </Formik> 
          </div>
        </Col>
      </Row>
    </>
  );
}

export default CreatePin;
