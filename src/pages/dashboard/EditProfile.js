import { Formik } from 'formik';
import React from 'react';
import { Alert, Form, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { ButtonSubmit } from '../../components/ButtonAuth';
import { ProfileLayout } from '../../components/ContentLayout';
// import { getProfile, updateProfile } from '../../redux/actionAsync/profile';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfileUser } from '../../redux/actionAsync/user';
import { FiUser } from 'react-icons/fi';

const EditProfileForm = ({handleSubmit, handleChange, values}) => {
  const profile = useSelector((state)=>state.user.profile);
  const [img, setImg] = React.useState([]);
  const onImageChange = (e) => setImg(e.currentTarget.files[0]);
  values.picture = img;
  return (
    <Form noValidate onSubmit={handleSubmit} onChange={handleChange} className='w-100 d-flex flex-column gap-4'>
      <div className='d-flex justify-content-center'>
        <div className='d-flex flex-column align-items-center'>
          <div className='w-25'>
            {profile.photo_url ? <Image src={`${profile.photo_url}`} alt={profile.first_name} fluid className='rounded-4'/> : <div className='p-3 border border-2 rounded-circle border-color-1'><FiUser size={55} /></div>}
          </div>
          <Form.Group controlId='formFile' className='my-3  text-center'>
            <Form.Label className='color-text-2'>Change Photo</Form.Label>
            <Form.Control type='file' name='picture' onChange={onImageChange}/>
          </Form.Group>
        </div>
      </div>
      <Form.Group className='d-flex flex-row justify-content-between align-items-center shadow-sm rounded-4 px-4 py-3'>
        <div className='d-flex flex-column w-100'>
          <Form.Label className='fnt-desc2'>
            <span className='color-text-2'>First Name</span>
          </Form.Label>
          <Form.Control
            name='firstName'
            className='cstm-border2 rounded-0 color-text-6 fw-bold fs-5'
            type='text'
            value={values.firstName}
            onChange={handleChange('firstName')}
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
            value={values.lastName}
            onChange={handleChange('lastName')}
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
  const dispatch = useDispatch();
  const successMsg = useSelector(state => state.user.successUpdateMsg);
  const errorMsg = useSelector(state => state.user.errorUpdateMsg);
  const profile = useSelector((state)=>state.user.profile);
  const [showMsg, setShowMsg] = React.useState(false);
  const onSubmitEditProfile = (val) => {
    dispatch(updateProfileUser(val));
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
  };
  React.useEffect(()=>{
    if(errorMsg == null && successMsg != null){
      setTimeout(() => {
        redirect('/home/profile');
      }, 3000);
    }
  }, [errorMsg, successMsg, redirect]);
  return (
    <>
      <ProfileLayout
        headerText='Edit Pofile'
        subtitleText="Here you can edit or update your personal information data's. Just click in the field and edit your data's."
        child={
          <div className='d-flex flex-column gap-4'>
            {showMsg && errorMsg ? <Alert variant={'danger'}>{errorMsg}</Alert> : null}
            {showMsg && successMsg ? <Alert variant={'success'}>{successMsg}</Alert> : null}
            <Formik onSubmit={onSubmitEditProfile} initialValues={{firstName: profile?.first_name, lastName: profile?.last_name, picture: ''}} >
              {(props) => <EditProfileForm {...props} />}
            </Formik>
          </div>
        }
      />
    </>
  );
}

export default EditProfile;
