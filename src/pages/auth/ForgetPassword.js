import React from "react";
import { Row, Col } from "react-bootstrap";
import AuthBanner from "../../components/AuthBanner";
import TitleAuthForm from "../../components/TitleAuthForm";
import InputField from "../../components/InputField";
import ButtonAuth from "../../components/ButtonAuth";
import { FiMail } from "react-icons/fi";
import { Helmet, HelmetProvider } from "react-helmet-async";

function ForgetPassword() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Forget Password</title>
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
                "Did You Forgot Your Password? Don't Worry, You Can Reset Your Password In a Minutes."
              }
              subtitle={
                "To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens."
              }
            />
            <InputField
              icon={<FiMail size={24} className="bg-grey-light" />}
              type={"text"}
              placeholder={"Enter your e-mail"}
            />
          </div>
          <ButtonAuth link={"/auth/addNewPassword"} textButton={"Confirm"} />
        </Col>
      </Row>
    </>
  );
}

export default ForgetPassword;
