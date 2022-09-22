import React from 'react';
import { Alert, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { ButtonSubmit } from '../../components/ButtonAuth';
import { ProfileLayout } from '../../components/ContentLayout';
import { InputPin } from '../../components/InputField';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { changePinUser } from '../../redux/actionAsync/user';

const ChangePinForm = ({errors, handleChange, handleSubmit }) => {
  return (
    <Form noValidate onSubmit={handleSubmit} onChange={handleChange} className='d-flex flex-column gap-4 height-up-form justify-content-center' >
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
      <span className='fs-6 text-danger'>
        {errors.pin}
      </span>
      <div className='mt-5'>
        <ButtonSubmit textButton='Confirm' />
      </div>
    </Form>
  );
};

function ChangeNewPin() {
  const redirect = useNavigate();
  const dispatch = useDispatch();
  const param = useLocation();
  const successMsg = useSelector(state => state.user.successUpdateMsg);
  const errorMsg = useSelector(state => state.user.errorUpdateMsg);
  const [requiredField, setRequiredField] = React.useState(false);
  const [numberField, setNumberField] = React.useState(false);
  const [showMsg, setShowMsg] = React.useState(false);
  console.log(param);
  const onSubmitPin = (val) => {
    if(val.pin[0] === '' || val.pin[1] === '' || val.pin[2] === '' || val.pin[3] === '' || val.pin[4] === '' || val.pin[5] === ''){
      setRequiredField(true);
      setTimeout(() => {
        setRequiredField(false);
      }, 1000);
    } else {
      if (isNaN(parseInt(val.pin[0])) === false && isNaN(parseInt(val.pin[1])) === false && isNaN(parseInt(val.pin[2])) === false && isNaN(parseInt(val.pin[3])) === false && isNaN(parseInt(val.pin[4])) === false && isNaN(parseInt(val.pin[5])) === false){
        const finalPin = val.pin.join('');  
        const data = {newPin: finalPin, currentPin: param.state.pin};
        dispatch(changePinUser(data));
        if(successMsg != null){
          setShowMsg(true);
          setTimeout(() => {
            setShowMsg(false);
          }, 3000);
        } else if(errorMsg != null || errorMsg !== undefined){
          setShowMsg(true);
          setTimeout(() => {
            setShowMsg(false);
          }, 3000);
        }
      } else {
        setNumberField(true);
        setTimeout(() => {
          setNumberField(false);
        }, 1000);
      }
    }
  };
  React.useEffect(()=>{
    if(errorMsg == null && successMsg != null){
      setTimeout(() => {
        redirect('/home/profile');
      }, 2000);
    }
  }, [errorMsg, successMsg, redirect]);
  return (
    <>
      <ProfileLayout
        headerText='Change PIN'
        subtitleText='Type your new 6 digits security PIN to use in OurPocket.'
        child={
          <>
            {requiredField ? <Alert variant={'danger'}>Pin can't empty</Alert> : null}
            {numberField ? <Alert variant={'danger'}>Field must be input with number only.</Alert> : null}
            {showMsg && errorMsg ? <Alert variant={'danger'}>{errorMsg}</Alert> : null}
            {showMsg && successMsg ? <Alert variant={'success'}>{successMsg}</Alert> : null}
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

export default ChangeNewPin;
