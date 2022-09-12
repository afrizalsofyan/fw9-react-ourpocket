import { Formik } from 'formik';
import React from 'react';
import { Alert, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ProfileLayout } from '../../components/ContentLayout';
import { InputPin } from '../../components/InputField';
// import * as Yup from 'yup';
import { ButtonSubmit } from '../../components/ButtonAuth';
import { useSelector } from 'react-redux/es/exports';


const ChangePinForm = ({ errors, handleChange, handleSubmit }) => {
  return (
    <Form noValidate onSubmit={handleSubmit} onChange={handleChange} className='d-flex flex-column gap-4 height-up-form justify-content-center'>
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
      <div className='mt-5'>
        <ButtonSubmit textButton='Confirm' />
      </div>
    </Form>
  );
};

function ChangePin() {
  const redirect = useNavigate();
  const profile = useSelector((state)=> state.user.profile);
  const [requiredField, setRequiredField] = React.useState(false);
  const [numberField, setNumberField] = React.useState(false);
  const [errorMatch, setErrorMatch] = React.useState(false);
  const onSubmitPin = (val) => {
    if(val.pin[0] === '' || val.pin[1] === '' || val.pin[2] === '' || val.pin[3] === '' || val.pin[4] === '' || val.pin[5] === ''){
      setRequiredField(true);
      setTimeout(() => {
        setRequiredField(false);
      }, 1000);
    } else {
      if (isNaN(parseInt(val.pin[0])) === false && isNaN(parseInt(val.pin[1])) === false && isNaN(parseInt(val.pin[2])) === false && isNaN(parseInt(val.pin[3])) === false && isNaN(parseInt(val.pin[4])) === false && isNaN(parseInt(val.pin[5])) === false){
        const finalPin = parseInt(val.pin.join(''), 10);  
        if(finalPin === profile.pin_number){
          redirect('new-pin', {state: {pin: finalPin}});         
        }else{
          setErrorMatch(true);
          setTimeout(() => {
            setErrorMatch(false);
          }, 1000);
          // window.alert('Pin not match with your pin now !!!');
        }
      } else {
        setNumberField(true);
        setTimeout(() => {
          setNumberField(false);
        }, 1000);
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
            {requiredField ? <Alert variant={'danger'}>Pin can't empty</Alert> : null}
            {numberField ? <Alert variant={'danger'}>Field must be input with number only.</Alert> : null}
            {errorMatch ? <Alert variant={'danger'}>Pin not match with your pin now !!!</Alert> : null}
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
