import React from 'react';
import { Row, Col, Form, Alert } from 'react-bootstrap';
import AuthBanner from '../../components/AuthBanner';
import TitleAuthForm from '../../components/TitleAuthForm';
import { ButtonSubmit } from '../../components/ButtonAuth';
import { InputPin } from '../../components/InputField';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../redux/actionAsync/profile';
import { createPin } from '../../redux/actionAsync/auth';
import { getProfileCurrentUser } from '../../redux/actionAsync/user';
import { store } from '../../redux/store';

// const createPinSchema = Yup.object().shape({
//   pin1: Yup.number().typeError('Pin1 must be a number').min(0).max(9).required(),
//   pin2: Yup.number().typeError('Pin2 must be a number').min(0).max(9).required(),
//   pin3: Yup.number().typeError('Pin3 must be a number').min(0).max(9).required(),
//   pin4: Yup.number().typeError('Pin4 must be a number').min(0).max(9).required(),
//   pin5: Yup.number().typeError('Pin5 must be a number').min(0).max(9).required(),
//   pin6: Yup.number().typeError('Pin6 must be a number').min(0).max(9).required(),
// });

const CreatePinForm = ({ errors, handleSubmit, handleChange }) => {
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
      <ButtonSubmit textButton={'Confirm'}/>
    </Form>
  );
};

function CreatePin() {
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const errorMsg = useSelector((state)=>state.auth.errorMsg);
  const successMsg = useSelector(()=>store.getState().auth.successMsg);
  const token = useSelector((state) => state.auth.token);
  const profile = useSelector((state)=> state.user.profile);
  const [errShow, setErrShow] = React.useState(false);
  const [errText, setErrText] = React.useState();
  React.useEffect(() => {
    dispatch(getProfileCurrentUser());
  }, [dispatch, token]);
  const submitPin = (value) => {
    if(profile.pin_number === null){
      if(value.pin1 === '' || value.pin2 === '' || value.pin3 === '' || value.pin4 === '' || value.pin5 === '' || value.pin6 === ''){
        setErrShow(true);
        setErrText('Value is required');
        setTimeout(() => {
          setErrShow(false);
        }, 3000);
        // window.alert('Value is required');
      } else {
        if (isNaN(parseInt(value.pin1)) === false && isNaN(parseInt(value.pin2)) === false && isNaN(parseInt(value.pin3)) === false && isNaN(parseInt(value.pin4)) === false && isNaN(parseInt(value.pin5)) === false && isNaN(parseInt(value.pin6)) === false){
          const joinPin = value.pin1 + value.pin2 + value.pin3 + value.pin4 + value.pin5 + value.pin6;
          console.log(typeof joinPin);
          const data = {email: profile.email, pin: joinPin};
          setErrText('');
          dispatch(createPin(data));
          
        } else {
          setErrShow(true);
          setErrText('Please input with only number');
          setTimeout(() => {
            setErrShow(false);
          }, 3000);
          // window.alert('Please input with only number !!!');
        }
      }
    }
  };
  React.useEffect(()=>{
    if(errorMsg == null && successMsg !=null){
      dispatch(getProfileCurrentUser());
      if(profile?.pin_number != null){
        redirect('/auth/create-pin-success');
      }
    }
  }, [dispatch, errorMsg, successMsg, profile?.pin_number, redirect]);
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
                'Create your pin before use OurPocket Apps for transfer to others.'
              }
            />
            {errShow ? <Alert variant={'danger'}>{errText}</Alert> : null}
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
