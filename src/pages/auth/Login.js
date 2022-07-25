import React from "react";
import { Row, Col } from "react-bootstrap";
import { FiMail, FiLock, FiEyeOff } from "react-icons/fi";
import InputField from "../../components/InputField";
import AuthBanner from "../../components/AuthBanner";
import TitleAuthForm from "../../components/TitleAuthForm";
import ButtonAuth from "../../components/ButtonAuth";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Login() {
  const [showPass, setShowPass] = React.useState(false);
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
            <InputField
              icon={<FiMail size={24} className="bg-grey-light" />}
              type={"text"}
              placeholder={"Enter your e-mail"}
            />
            <InputField
              icon={<FiLock size={24} className="bg-grey-light" />}
              type={showPass ? "text" : "password"}
              placeholder={"Enter your password"}
              suffixIcon={
                <FiEyeOff
                  size={24}
                  className="bg-grey-light"
                  onClick={() => setShowPass(!showPass)}
                />
              }
            />
            <div className="text-end my-3">
              <Link
                to="/auth/forgetPassword"
                className="link-secondary link-rm-line"
              >
                Forgot password?
              </Link>
            </div>
          </div>
          <ButtonAuth link={"/home/dashboard"} textButton={"login"} />
          <div className="text-center">
            <span>
              Don't have an account? Let's{" "}
              <Link to="/auth/register" className="link-rm-line fw-bold">
                Sign Up
              </Link>
            </span>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Login;
