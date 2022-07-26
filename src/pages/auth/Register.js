import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { FiMail, FiLock, FiEyeOff, FiUser } from "react-icons/fi";
import InputField from "../../components/InputField";
import AuthBanner from "../../components/AuthBanner";
import TitleAuthForm from "../../components/TitleAuthForm";
import ButtonAuth, { ButtonSubmit } from "../../components/ButtonAuth";
import { Link, useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import * as Yup from "yup";
import { Formik } from "formik";

const registerScheme = Yup.object().shape({
  username: Yup.string().min(6).required(),
  email: Yup.string().email("Invalid email format").required(),
  password: Yup.string().min(4).required(),
});

const AuthRegister = ({ errors, handleSubmit, handleChange }) => {
  const [showPass, setShowPass] = React.useState(false);
  return (
    <Form
      className="d-flex flex-column gap-5"
      noValidate
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <InputField
        icon={<FiUser size={24} className="bg-grey-light" />}
        name="username"
        type="text"
        placeholder="Enter your username"
        isInvalid={!!errors.username}
        validation={
          <Form.Control.Feedback type="invalid">
            {errors.username}
          </Form.Control.Feedback>
        }
      />
      <InputField
        icon={<FiMail size={24} className="bg-grey-light" />}
        name="email"
        type="text"
        placeholder="Enter your e-mail"
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
        placeholder="Enter your password"
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
      <ButtonSubmit textButton="Sign Up"/>
    </Form>
  );
};

function Register() {
  const redirect = useNavigate()
  const submitRegister = () => {
    redirect('/auth/createPin');
  }
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>OPo - Register</title>
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
            <Formik onSubmit={submitRegister} initialValues={{username: '', email: '', password: ''}} validationSchema={registerScheme}>
              {(props)=><AuthRegister {...props}/>}
            </Formik>
          </div>
          <div className="text-center">
            <span>
              Already have an account? Let's{" "}
              <Link to="/auth/login" className="link-rm-line fw-bold">
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
