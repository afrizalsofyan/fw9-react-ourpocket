import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import AuthBanner from "../../components/AuthBanner";
import TitleAuthForm from "../../components/TitleAuthForm";
import ButtonAuth, { ButtonSubmit } from "../../components/ButtonAuth";
import { InputPin } from "../../components/InputField";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";

const createPinSchema = Yup.object().shape({
  pin1: Yup.number().typeError('Pin1 must be a Number').min(0).max(9).required(),
  pin2: Yup.number().typeError('Pin2 must be a Number').min(0).max(9).required(),
  pin3: Yup.number().typeError('Pin3 must be a Number').min(0).max(9).required(),
  pin4: Yup.number().typeError('Pin4 must be a Number').min(0).max(9).required(),
  pin5: Yup.number().typeError('Pin5 must be a Number').min(0).max(9).required(),
  pin6: Yup.number().typeError('Pin6 must be a Number').min(0).max(9).required(),
});

const CreatePinForm = ({ errors, handleSubmit, handleChange }) => {
  const arrError = [0,1,2,3,4,5]
  return (
    <Form
      className="d-flex flex-column gap-5"
      noValidate
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <div className="d-flex flex-row pin-wrapper gap-2 gap-md-2 gap-lg-4 justify-content-center">
        <InputPin
          name="pin1"
          type="text"
          isInvalid={!!errors.pin1}
        />
        <InputPin
          name="pin2"
          type="text"
          isInvalid={!!errors.pin2}
        />
        <InputPin
          name="pin3"
          type="text"
          isInvalid={!!errors.pin3}
        />
        <InputPin
          name="pin4"
          type="text"
          isInvalid={!!errors.pin4}
        />
        <InputPin
          name="pin5"
          type="text"
          isInvalid={!!errors.pin5}
        />
        <InputPin
          name="pin6"
          type="text"
          isInvalid={!!errors.pin6}
        />
      </div>
      {arrError.map((el, index)=>{
         switch (index) {
          case 0:
            if(errors.pin1 !== undefined){
              return (
                <span key={index} className="text-danger">
                  {errors.pin1}
                </span>
              )
            }
            break;
            case 1:
            if(errors.pin2 !== undefined){
              return (
                <span key={index} className="text-danger">
                  {errors.pin2}
                </span>
              )
            }
            break;
            case 2:
            if(errors.pin3 !== undefined){
              return (
                <span key={index} className="text-danger">
                  {errors.pin3}
                </span>
              )
            }
            break;
            case 3:
            if(errors.pin4 !== undefined){
              return (
                <span key={index} className="text-danger">
                  {errors.pin4}
                </span>
              )
            }
            break;
            case 4:
            if(errors.pin5 !== undefined){
              return (
                <span key={index} className="text-danger">
                  {errors.pin5}
                </span>
              )
            }
            break;
            case 5:
            if(errors.pin6 !== undefined){
              return (
                <span key={index} className="text-danger">
                  {errors.pin6}
                </span>
              )
            }
            break;
          default:
            break;
        } 
      })}
      <ButtonSubmit textButton={"Confirm"} />
    </Form>
  );
};

function CreatePin() {
  const redirect = useNavigate()
  const submitPin = (value) => {
    const joinPin = value.pin1 + value.pin2 + value.pin3 + value.pin4 + value.pin5 + value.pin6;
    console.log(joinPin);
    redirect("/auth/create-pin-success")
  }
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
            <Formik
              onSubmit={submitPin}
              initialValues={{
                pin1: "",
                pin2: "",
                pin3: "",
                pin4: "",
                pin5: "",
                pin6: "",
              }}
              validationSchema={createPinSchema}
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
