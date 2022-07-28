import React from "react";
import { ProfileLayout } from "../../components/ContentLayout";
import { Link, useNavigate } from "react-router-dom";
import { FiEyeOff, FiLock } from "react-icons/fi";
import InputField from "../../components/InputField";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup"
import { ButtonSubmit } from "../../components/ButtonAuth";

const changePasswordSchema = Yup.object().shape({
  currentPass: Yup.string().min(4).required(),
  newPass: Yup.string().min(4).required(),
  confirmPass: Yup.string().min(4).required()
})

export const ChangePasswordForm = ({errors, handleSubmit, handleChange}) => {
  const [showPass, setShowPass] = React.useState(false);
  const [showNewPass, setShowNewPass] = React.useState(false);
  const [showConfirmPass, setShowConfirmPass] = React.useState(false);
  return (
    <Form noValidate onSubmit={handleSubmit} onChange={handleChange}>
      <div className="d-flex flex-row justify-content-center py-2">
        <div className="d-flex flex-column justify-content-center gap-4 w-75">
          <InputField
            name="currentPass"
            icon={<FiLock size={24} className="color-text-6" />}
            type={showPass ? "text" : "password"}
            placeholder={"Current password"}
            suffixIcon={
              <FiEyeOff
                size={24}
                className="color-text-6"
                onClick={() => setShowPass(!showPass)}
              />
            }
            isInvalid={!!errors.currentPass}
            validation={
              <Form.Control.Feedback type="invalid">
                {errors.currentPass}
              </Form.Control.Feedback>
            }
          />
          <InputField
            name="newPass"
            icon={<FiLock size={24} className="color-text-6" />}
            type={showNewPass ? "text" : "password"}
            placeholder={"New password"}
            suffixIcon={
              <FiEyeOff
                size={24}
                className="color-text-6"
                onClick={() => setShowNewPass(!showNewPass)}
              />
            }
            isInvalid={!!errors.newPass}
            validation={
              <Form.Control.Feedback type="invalid">
                {errors.newPass}
              </Form.Control.Feedback>
            }
          />
          <InputField
            name="confirmPass"
            icon={<FiLock size={24} className="color-text-6" />}
            type={showConfirmPass ? "text" : "password"}
            placeholder={"Repeat new password"}
            suffixIcon={
              <FiEyeOff
                size={24}
                className="color-text-6"
                onClick={() => setShowConfirmPass(!showConfirmPass)}
              />
            }
            isInvalid={!!errors.confirmPass}
            validation={
              <Form.Control.Feedback type="invalid">
                {errors.confirmPass}
              </Form.Control.Feedback>
            }
          />
        </div>
      </div>
      <div className="d-grid px-5 my-5">
        <ButtonSubmit textButton="Add Phone Number" buttonType={"sm"}/>
      </div>
      {/* <div className="d-grid px-5 my-5">
        <Link to="../details" className="btn border-0 px-4 py-2 btn-prim-1">
          <span>Change Password</span>
        </Link>
      </div> */}
    </Form>
  );
};

function ChangePassword() {
  const redirect = useNavigate()
  const onSubmitPassword = (val) => {
    if(val.newPass !== val.confirmPass) {
      window.alert("Repeat password is incorrect")
    } else {
      redirect('../details')
    }
  }
  return (
    <>
      <ProfileLayout
        headerText="Change Password"
        subtitleText="You must enter your current password and then type your new password twice."
        child={
          <>
            <Formik
              onSubmit={onSubmitPassword}
              initialValues={{ currentPass: "", newPass: "", confirmPass: "" }}
              validationSchema={changePasswordSchema}
            >
              {(props) => <ChangePasswordForm {...props} />}
            </Formik>
          </>
        }
      />
    </>
  );
}

export default ChangePassword;
