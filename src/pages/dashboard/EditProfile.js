import { Formik } from 'formik';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { ButtonSubmit } from '../../components/ButtonAuth';
import { ProfileLayout } from '../../components/ContentLayout';

const EditProfileForm = ({handleSubmit, handleChange}) => {
  const [dataFirstName, setDataFirstName] = React.useState('Robert');
  const [dataLastName, setDataLastName] = React.useState('Chandler');
  const [dataEmail, setDataEmail] = React.useState('pewdiepie1@gmail.com');
  const [dataPhoneNumber, setDataPhoneNumber] = React.useState('+62 822 3232 3232');

  return (
    <Form noValidate onSubmit={handleSubmit} onChange={handleChange} className='w-100 d-flex flex-column gap-4'>
      <Form.Group className='d-flex flex-row justify-content-between align-items-center shadow-sm rounded-4 px-4 py-3'>
        <div className='d-flex flex-column w-100'>
          <Form.Label className='fnt-desc2'>
            <span className='color-text-2'>First Name</span>
          </Form.Label>
          <Form.Control
            name='firstName'
            className='cstm-border2 rounded-0 color-text-6 fw-bold fs-5'
            type='text'
            value={dataFirstName}
            onChange={(e)=> setDataFirstName(e.target.value)}
            // value={dataFirstName}
            // onChange={(e)=>{
            //     e.target.name = dataFirstName
            //     setDataFirstName(e.currentTarget.value)
            //     }
            // }
          />
        </div>
      </Form.Group>
      <Form.Group className='d-flex flex-row justify-content-between align-items-center shadow-sm rounded-4 px-4 py-3'>
        <div className='d-flex flex-column w-100'>
          <Form.Label className='fnt-desc2'>
            <span className='color-text-2'>Last Name</span>
          </Form.Label>
          <Form.Control
            name='lastName'
            className='cstm-border2 rounded-0 color-text-6 fw-bold fs-5'
            type='text'
            value={dataLastName}
            onChange={(e)=>
              setDataLastName(e.currentTarget.value)
                
            }
          />
        </div>
      </Form.Group>
      <Form.Group className='d-flex flex-row justify-content-between align-items-center shadow-sm rounded-4 px-4 py-3'>
        <div className='d-flex flex-column w-100'>
          <Form.Label className='fnt-desc2'>
            <span className='color-text-2'>Verified E-mail</span>
          </Form.Label>
          <Form.Control
            name='email'
            className='cstm-border2 rounded-0 color-text-6 fw-bold fs-5'
            type='email'
            value={dataEmail}
            onChange={(e)=>
              setDataEmail(e.currentTarget.value)
                
            }
          />
        </div>
      </Form.Group>
      <Form.Group className='d-flex flex-row justify-content-between align-items-center shadow-sm rounded-4 px-4 py-3'>
        <div className='d-flex flex-column w-100'>
          <Form.Label className='fnt-desc2'>
            <span className='color-text-2'>Phone Number</span>
          </Form.Label>
          <Form.Control
            name='phoneNumber'
            className='cstm-border2 rounded-0 color-text-6 fw-bold fs-5'
            type='text'
            value={dataPhoneNumber}
            onChange={(e)=>
              setDataPhoneNumber(e.currentTarget.value)
                
            }
          />
        </div>
      </Form.Group>

      <div className='d-flex flex-row justify-content-end align-items-center mt-4 gap-3'>
        <div>
          <Link
            to='/home/profile'
            className='btn border-0 px-4 py-2 btn-danger'
          >
            Cancel
          </Link>
        </div>
        <div>
          <ButtonSubmit textButton='Update Profile' />
        </div>
      </div>
    </Form>
  );
};

function EditProfile() {
  const redirect = useNavigate();
  const onSubmitEditProfile = (val) => {
    redirect('../');
  };
  return (
    <>
      <ProfileLayout
        headerText='Edit Pofile'
        subtitleText="Here you can edit or update your personal information data's. Just click in the field and edit your data's."
        child={
          <div className='d-flex flex-column gap-4'>
            <Formik onSubmit={onSubmitEditProfile} initialValues={{firstName: '', lastName: '', email: '', phoneNumber: ''}}>
              {(props) => <EditProfileForm {...props} />}
            </Formik>
          </div>
        }
      />
    </>
  );
}

export default EditProfile;
