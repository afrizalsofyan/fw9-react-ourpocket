import React from 'react';
import { Row, Col, Form, Alert } from 'react-bootstrap';
import { FiMail, FiLock, FiEyeOff, FiUser, FiEye } from 'react-icons/fi';
import InputField from '../../components/InputField';
import AuthBanner from '../../components/AuthBanner';
import TitleAuthForm from '../../components/TitleAuthForm';
import { ButtonSubmit } from '../../components/ButtonAuth';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/actionAsync/auth';

const registerScheme = Yup.object().shape({
  username: Yup.string().matches(/^\S*$/, 'username can\'t use space').min(6).required(),
  email: Yup.string().email('Invalid email format').required(),
  password: Yup.string().min(4).required(),
});

const AuthRegister = ({ errors, handleSubmit, handleChange }) => {
  const [showPass, setShowPass] = React.useState(false);
  return (
    <Form
      className='d-flex flex-column gap-5'
      noValidate
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <InputField
        icon={<FiUser size={24} className='bg-grey-light' />}
        name='username'
        type='text'
        placeholder='Enter your username'
        isInvalid={!!errors.username}
        validation={
          <Form.Control.Feedback type='invalid'>
            {errors.username}
          </Form.Control.Feedback>
        }
      />
      <InputField
        icon={<FiMail size={24} className='bg-grey-light' />}
        name='email'
        type='text'
        placeholder='Enter your e-mail'
        isInvalid={!!errors.email}
        validation={
          <Form.Control.Feedback type='invalid'>
            {errors.email}
          </Form.Control.Feedback>
        }
      />
      <InputField
        icon={<FiLock size={24} className='bg-grey-light' />}
        name='password'
        type={showPass ? 'text' : 'password'}
        placeholder='Enter your password'
        isInvalid={!!errors.password}
        suffixIcon={
          showPass ? (
            <FiEyeOff
              size={24}
              className='bg-grey-light'
              onClick={() => setShowPass(!showPass)}
            />
          ) : (
            <FiEye
              size={24}
              className='bg-grey-light'
              onClick={() => setShowPass(!showPass)}
            />
          )
        }
        validation={
          <Form.Control.Feedback type='invalid'>
            {errors.password}
          </Form.Control.Feedback>
        }
      />
      <ButtonSubmit textButton='Sign Up' disable={Object.keys(errors).length === 0 ? false : true } />
    </Form>
  );
};

function Register() {
  const redirect = useNavigate();
  const dispatch = useDispatch();
  const successMsg = useSelector((state)=>state.auth.successMsg);
  const errorMsg = useSelector((state)=>state.auth.errorMsg);
  const submitRegister = (val) => {
    dispatch(register(val));
  };
  React.useEffect(()=>{
    if(successMsg != null && errorMsg == null){
      // const dataNewUse ={email: val.email, password: val.password};
      setTimeout(() => {
        redirect('/auth/login');
      }, 2500);
    }
  }, [redirect, successMsg, errorMsg]);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>OPo - Register</title>
        </Helmet>
      </HelmetProvider>
      <Row className='gx-0'>
        <AuthBanner />
        <Col
          xs={12}
          md={5}
          className='px-5 py-5 d-flex flex-column justify-content-center bg-white gap-5'
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
            {errorMsg && <Alert variant='danger'>{errorMsg}</Alert>}
            <Formik
              onSubmit={submitRegister}
              initialValues={{ username: '', email: '', password: '' }}
              validationSchema={registerScheme}
            >
              {(props) => <AuthRegister {...props} />}
            </Formik>
          </div>
          <div className='text-center'>
            <span>
              Already have an account? Let's{' '}
              <Link
                to='/auth/login'
                className='link-rm-line fw-bold color-text-primary'
              >
                Login
              </Link>
            </span>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Register;
