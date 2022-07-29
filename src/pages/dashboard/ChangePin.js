import { Formik } from 'formik';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ProfileLayout } from '../../components/ContentLayout';
import { InputPin } from '../../components/InputField';
// import * as Yup from 'yup';
import { ButtonSubmit } from '../../components/ButtonAuth';
import { useSelector } from 'react-redux/es/exports';

// const changePinSchema = Yup.object().shape({
//   pin: Yup.array().of(
//     Yup.string()
//       .matches(/[0-9]{1}/, "Must number value")
//       .required("Pin is required")
//   ),
// });

const ChangePinForm = ({ errors, handleChange, handleSubmit }) => {
  return (
    <Form noValidate onSubmit={handleSubmit} onChange={handleChange} className='d-flex flex-column gap-4'>
      <div className='d-flex flex-row pin-wrapper gap-2 gap-md-2 gap-lg-4 justify-content-center'>
        <InputPin
          name={`pin[${0}]`}
          type='text'
          // isInvalid={!!errors.pin}
        />
        <InputPin
          name={`pin[${1}]`}
          type='text'
          // isInvalid={!!errors.pin}
        />
        <InputPin
          name={`pin[${2}]`}
          type='text'
          // isInvalid={!!errors.pin}
        />
        <InputPin
          name={`pin[${3}]`}
          type='text'
          // isInvalid={!!errors.pin}
        />
        <InputPin
          name={`pin[${4}]`}
          type='text'
          // isInvalid={!!errors.pin}
        />
        <InputPin
          name={`pin[${5}]`}
          type='text'
          // isInvalid={!!errors.pin}
        />
      </div>
      <span className='fs-6 text-danger'>{errors.pin}</span>
      <ButtonSubmit textButton='Confirm' />
    </Form>
  );
};

function ChangePin() {
  const pinData = useSelector((state)=> state.user.pin);
  const redirect = useNavigate();
  const onSubmitPin = (val) => {
    if(val.pin[0] === '' || val.pin[1] === '' || val.pin[2] === '' || val.pin[3] === '' || val.pin[4] === '' || val.pin[5] === ''){
      window.alert('Value is required');
    } else {
      if (isNaN(parseInt(val.pin[0])) === false && isNaN(parseInt(val.pin[1])) === false && isNaN(parseInt(val.pin[2])) === false && isNaN(parseInt(val.pin[3])) === false && isNaN(parseInt(val.pin[4])) === false && isNaN(parseInt(val.pin[5])) === false){
        const finalPin = val.pin.join('');  
        if(parseInt(finalPin) === pinData){
          redirect('new-pin');         
        }else{
          window.alert('Pin not match with your pin now !!!');
        }
      } else {
        window.alert('Please input with only number !!!');
      }
    }
  };
  return (
    <>
      <ProfileLayout
        headerText='Change PIN'
        subtitleText='Enter your current 6 digits OurPocket PIN below to continue to the next steps.'
        child={
          <>
            <Formik
              onSubmit={onSubmitPin}
              initialValues={{
                pin: [''],
              }}
              // validationSchema={changePinSchema}
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
