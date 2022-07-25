import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { FiMail, FiLock, FiEyeOff } from "react-icons/fi";
import InputField from "../../components/InputField";
import AuthBanner from "../../components/AuthBanner";
import TitleAuthForm from "../../components/TitleAuthForm";
import {ButtonSubmit} from "../../components/ButtonAuth";
import { Link, useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import * as Yup from "yup";
import { Formik } from "formik";

const loginSheme = Yup.object().shape({
  email: Yup.string().email("invalid email address format").required(),
  password: Yup.string().min(4).required()
});

const AuthForm = ({errors, handleSubmit, handleChange}) => {
  const [showPass, setShowPass] = React.useState(false);
  return (
    <Form className="d-flex flex-column gap-5" noValidate onSubmit={handleSubmit} onChange={handleChange}>
      <InputField
        icon={<FiMail size={24} className="bg-grey-light" />}
        name="email"
        type="email"
        placeholder={"Enter your e-mail"}
        isInvalid={!!errors.email}
        validation={
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        }
      />
      <InputField
        icon={<FiLock size={24} className="bg-grey-light" />}
        name="password"
        type={showPass ? "text" : "password"}
        placeholder={"Enter your password"}
        isInvalid={!!errors.password}
        suffixIcon={
          <FiEyeOff
            size={24}
            className="bg-grey-light"
            onClick={() => setShowPass(!showPass)}
          />
        }
        validation={
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        }
      />
      <div className="text-end my-3">
        <Link to="/auth/forgetPassword" className="link-secondary link-rm-line">
          Forgot password?
        </Link>
      </div>
      {/* <Button variant="primary" type="submit"></Button> */}
      <ButtonSubmit textButton={'Login'}/>
      {/* <ButtonAuth link={"#"} textButton={"login"} type={'submit'}/> */}
      <div className="text-center">
        <span>
          Don't have an account? Let's{" "}
          <Link to="/auth/register" className="link-rm-line fw-bold">
            Sign Up
          </Link>
        </span>
      </div>
    </Form>
  );
};

function Login() {
  const redirect = useNavigate()
  const [values, setValues] = React.useState({email: 'risna@mail.com', password: '1503'})
  const testLogin = (value) => {
    
    if(value.email === values.email && value.password === values.password){
      redirect('/home/dashboard')
      // setLogin(true)
    } else {
      window.alert('login failed')
      // setLogin(false)
    }
  }
  console.log(values);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>OPo - Login</title>
        </Helmet>
      </HelmetProvider>
      <Row className="gx-0">
        <AuthBanner />
        <Col
          xs={12}
          md={5}
          className="px-5 py-5 d-flex flex-column justify-content-center bg-white gap-5"
        >
          <div className="d-flex flex-column gap-5">
            <TitleAuthForm
              title={
                "Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users"
              }
              subtitle={
                "Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!"
              }
            />
            <Formik onSubmit={testLogin} initialValues={{email: '', password: ''}} validationSchema={loginSheme}>
              {(props)=> <AuthForm {...props}/>}
            </Formik>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Login;
