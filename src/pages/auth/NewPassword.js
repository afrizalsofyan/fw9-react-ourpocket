import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { FiLock, FiEyeOff } from "react-icons/fi";
import InputField from "../../components/InputField";
import AuthBanner from "../../components/AuthBanner";
import TitleAuthForm from "../../components/TitleAuthForm";
import ButtonAuth, { ButtonSubmit } from "../../components/ButtonAuth";
import { Helmet, HelmetProvider } from "react-helmet-async";
import * as Yup from "yup";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

const newPassSheme = Yup.object().shape({
  password: Yup.string().min(4).required(),
  confirmPassword: Yup.string().min(4).required()
});

export const NewPass = ({errors, handleSubmit, handleChange, matchedFeedback}) => {
  const [showPass, setShowPass] = React.useState(false);
  const [showConfirmPass, setShowConfirmPass] = React.useState(false);
  return (
     <Form className="d-flex flex-column gap-5" noValidate onSubmit={handleSubmit} onChange={handleChange}>
      <InputField
        icon={<FiLock size={24} className="bg-grey-light" />}
        name="password"
        type={showPass ? "text" : "password"}
        placeholder={"Create new password"}
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
      <InputField
        icon={<FiLock size={24} className="bg-grey-light" />}
        name="confirmPassword"
        type={showConfirmPass ? "text" : "password"}
        placeholder={"Confirm new password"}
        isInvalid={!!errors.confirmPassword}
        suffixIcon={
          <FiEyeOff
            size={24}
            className="bg-grey-light"
            onClick={() => setShowConfirmPass(!showConfirmPass)}
          />
        }
        validation={
          <Form.Control.Feedback type="invalid">
            {errors.confirmPassword}
          </Form.Control.Feedback>
        }
      />
      <ButtonSubmit textButton={'Reset Password'}/>
    </Form>
  );
};

function NewPassword() {
  const redirect = useNavigate()
  const submitNewPass = (values) => {
    if(values.password === values.confirmPassword){
      redirect('/auth/login')
    } else {
      window.alert('Confirm password incorrect')
    }
  }
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Forget Password - Reset Password</title>
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
            <Formik
              onSubmit={submitNewPass}
              initialValues={{ password: "", confirmPassword: "" }}
              validationSchema={newPassSheme}
            >
              {(props) => <NewPass {...props} />}
            </Formik>
          </div>
          {/* <ButtonAuth link={"/auth/login"} textButton={"Reset Password"} /> */}
        </Col>
      </Row>
    </>
  );
}

export default NewPassword;
