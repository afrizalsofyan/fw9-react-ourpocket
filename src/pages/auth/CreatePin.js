import React from "react";
import { Row, Col } from "react-bootstrap";
import AuthBanner from "../../components/AuthBanner";
import TitleAuthForm from "../../components/TitleAuthForm";
import ButtonAuth from "../../components/ButtonAuth";
import { InputPin } from "../../components/InputField";
import {Helmet, HelmetProvider} from 'react-helmet-async'

function CreatePin() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Register - Create Pin</title>
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
          <div className="d-flex flex-row pin-wrapper gap-2 gap-md-2 gap-lg-4 justify-content-center">
              <InputPin />
              <InputPin />
              <InputPin />
              <InputPin />
              <InputPin />
              <InputPin />
            </div>
        </div>
        <ButtonAuth link={"/auth/createPinSuccess"} textButton={"Confirm"} />
      </Col>
    </Row>
    </>
  );
}

export default CreatePin;
