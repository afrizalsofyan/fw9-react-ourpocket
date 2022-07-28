import { FieldArray, Formik } from "formik";
import React from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ProfileLayout } from "../../components/ContentLayout";
import { InputPin } from "../../components/InputField";
import * as Yup from "yup";
import { ButtonSubmit } from "../../components/ButtonAuth";

const changePinSchema = Yup.object().shape({
  pin: Yup.array().of(
    Yup.string().matches(/[0-9]{1}/, "Must number value").required('Pin is required'),
    // Yup.object().shape({
    //   0: 
    //   2: Yup.string().min(1).max(1).matches(/[0-9]{1}/, "Must number value").required(),
    //   3: Yup.string().min(1).max(1).matches(/[0-9]{1}/, "Must number value").required(),
    //   4: Yup.string().min(1).max(1).matches(/[0-9]{1}/, "Must number value").required(),
    //   5: Yup.string().min(1).max(1).matches(/[0-9]{1}/, "Must number value").required(),
    // })
  )
});

const ChangePinForm = ({errors, handleChange, handleSubmit }) => {
  return (
    <Form noValidate onSubmit={handleSubmit} onChange={handleChange}>
      <div className="d-flex flex-row pin-wrapper gap-2 gap-md-2 gap-lg-4 justify-content-center my-5">
      <InputPin  
                name={`pin[${0}]`}
                type="text"
                // isInvalid={!!errors.pin}
              />
              <InputPin
                name={`pin[${1}]`}
                type="text"
                // isInvalid={!!errors.pin}
              />
              <InputPin
                name={`pin[${2}]`}
                type="text"
                // isInvalid={!!errors.pin}
              />
              <InputPin
                name={`pin[${3}]`}
                type="text"
                // isInvalid={!!errors.pin}
              />
              <InputPin
                name={`pin[${4}]`}
                type="text"
                // isInvalid={!!errors.pin}
              />
              <InputPin
                name={`pin[${5}]`}
                type="text"
                // isInvalid={!!errors.pin}
              />
      </div>
      <span className="fs-1 py-5">
        {errors.pin}
      </span>
      <ButtonSubmit textButton="Confirm" />
      {/* <div className="d-grid px-5 mb-5 w-75 mx-auto">
              <Link
                to="newPin"
                className="btn border-0 px-4 py-2 btn-prim-1"
              >
                <span>Confirm</span>
              </Link>
            </div> */}
    </Form>
  );
};

function ChangePin() {
  const redirect = useNavigate()
  const onSubmitPin = (val) => {
    const finalPin = val.pin.join('')
    console.log(finalPin)
    redirect('new-pin')
  }
  return (
    <>
      <ProfileLayout
        headerText="Change PIN"
        subtitleText="Enter your current 6 digits OurPocket PIN below to continue to the next steps."
        child={
          <>
            <Formik
              onSubmit={onSubmitPin}
              initialValues={{
                pin: [''],
              }}
              
              validationSchema={changePinSchema}
            >
              {(props) => <ChangePinForm {...props} />}
            </Formik>
          </>
        }
      />
    </>
  );
}

export default ChangePin;
