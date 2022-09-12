import React from 'react';
import { ProfileLayout } from '../../components/ContentLayout';
import { useNavigate } from 'react-router-dom';
import { FiPhone } from 'react-icons/fi';
import { InputField2 } from '../../components/InputField';
import { Formik } from 'formik';
import { Alert, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { ButtonSubmit } from '../../components/ButtonAuth';
import  'yup-phone';
import { useDispatch, useSelector } from 'react-redux';
import { updatePhoneNumberUser } from '../../redux/actionAsync/user';
// import { addPhoneNumber } from '../../redux/actionAsync/profile';

// const phoneSchema = Yup.object().shape({
//   phone: Yup.string().matches(/([8]{1})/, "Input with first number phone is 8").matches(/(([11]{2}|[12]{2}|[13]{2}|[15]{2}|[19]{2}|[21]{2}|[22]{2}|[2&3]{2}|[52]{2}|[96]{2}|[98]{2}|[99]{2}]{3}))/, "Please input code for Indonesia phone number").required().length(11),
// });

const phoneSchema = Yup.string().phone('ID', true, 'Please input with Indonesian Phone Zone').required();

export const PhoneForm = ({errors, handleSubmit, handleChange, values, isValid}) => {
  const profile = useSelector(state => state.user.profile);
  return (
    <Form noValidate onSubmit={handleSubmit} className='height-up-form d-flex flex-column justify-content-evenly'>
      <InputField2
        icon={
          <>
            <FiPhone size={24} className='color-text-6' />
            <span className='ms-2 fw-bold color-text-6'>+62</span>
          </>
        }
        placeholder={values.phoneNumber ? values.phoneNumber : 'Enter your phone number'}
        type='text'
        name='phoneNumber'
        value={values.phoneNumber}
        onChange={handleChange('phoneNumber')}
      />
      <div className='d-grid px-5 my-5'>
        <ButtonSubmit textButton={profile?.phone_number ? 'Update Phone Number' : 'Add Phone Number'} buttonType={'sm'} disable={!isValid||values.phoneNumber === ''} />
      </div>
    </Form>
  );
};

function AddNewPhone() {
  const redirect = useNavigate();
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const successMsg = useSelector(state => state.user.successUpdateMsg);
  const [invalidPhone, setInvalidPhone] = React.useState(false);
  const [showMsg, setShowMsg] = React.useState(false);
  const onSubmitPhone = async (val) => {
    if(val.phone === ''){
      window.alert('Field is required !!!');
    } else {
      const validPhone = await phoneSchema.isValid(val.phoneNumber);
      if(!validPhone){
        // window.alert('Your phone is not from Indonesian zone !!!');
        setInvalidPhone(true);
        setTimeout(() => {
          setInvalidPhone(false);
        }, 3000);
      } else {
        dispatch(updatePhoneNumberUser(val));
        if(successMsg != null || successMsg !== undefined){
          setShowMsg(true);
          setTimeout(() => {
            setShowMsg(false);
          }, 3000);
          setTimeout(() => {
            redirect('/home/profile');
          }, 4000);
        }
      }
    }
  };
  console.log(successMsg);
  return (
    <>
      <ProfileLayout
        headerText={profile?.phone_number ? 'Update Phone Number' : 'Add Phone Number'}
        subtitleText='Add at least one phone number for the transfer ID so you can start transfering your money to another user.'
        child={
          <>
            <div className='d-flex flex-row justify-content-center'>
              <div className='d-flex flex-column justify-content-center gap-5 w-75'>
                {invalidPhone ? <Alert variant='danger'>
                  <Alert.Heading>Invalid Phone Format</Alert.Heading>
                  <p>Your input is not matches with ID format phone.</p>
                </Alert> : null}
                {showMsg ? <Alert variant='success'>
                  <Alert.Heading>{profile?.phone_number ? 'Success update phone' : 'Success add phone'}</Alert.Heading>
                  <p>Phone number has been updated.</p>
                </Alert> : null}
                <Formik
                  onSubmit={onSubmitPhone}
                  initialValues={{ phoneNumber: profile?.phone_number }}
                  validationSchema={phoneSchema}
                >
                  {(props) => <PhoneForm {...props} />}
                </Formik>
              </div>
            </div>
          </>
        }
      />
    </>
  );
}

export default AddNewPhone;
