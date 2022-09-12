import React from 'react';
import { Alert, Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ContentLayout from '../../components/ContentLayout';
import NavbarDashboard from '../../components/NavbarDashboard';
import SideBarMenu from '../../components/SideBarMenu';
import FooterDashboard from '../../components/FooterDashboard';
import Img1 from '../../assets/images/img/img3.png';
import { FiArrowRight, FiEdit2, FiTrash2, FiUser } from 'react-icons/fi';
import { ButtonMenuProfile } from '../../components/ButtonAuth';
import { useDispatch, useSelector } from 'react-redux';
import { deletePhoto, getProfileCurrentUser } from '../../redux/actionAsync/user';
import { logout } from '../../redux/reducers/auth';


export const HeaderProfile = ({ to, imgUrl, alt, name, phone }) => {
  const dispatch = useDispatch();
  const successMsg = useSelector(state => state.user.successUpdateMsg);
  const errorMsg = useSelector(state => state.user.errorUpdateMsg);
  const profile = useSelector(state => state.user.profile);
  const [showMsg, setShowMsg] = React.useState(false);
  const onDeletePhoto = () => {
    dispatch(deletePhoto());
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
  return (
    <>
      <div className='d-flex flex-column align-items-center gap-3'>
        {showMsg && errorMsg ? <Alert variant={'danger'}>{errorMsg}</Alert> : null}
        {showMsg && successMsg ? <Alert variant={'success'}>{successMsg}</Alert> : null}
        <div className='d-flex img-profile-box justify-content-center'>
          {profile.photo_url ? <Image src={imgUrl} alt={alt} fluid className='rounded-4'/> : <div className='p-3 border border-2 rounded-circle border-color-1'><FiUser size={100} /></div> }
        </div>
        <div className='d-md-flex align-items-center gap-3'>
          {profile.photo_url ? <span className='link-rm-line link-text bg-grey-light d-flex gap-2 align-items-center bg-transparent border-0 shadow-none d-flex flex-column' onClick={onDeletePhoto}>
            <FiTrash2 size={20}/>
            <span className='fw-normal'>Delete Photo</span>
          </span> : null}
          {profile.photo_url ? <span className='fs-1 fw-light bg-grey-light mb-2 d-none d-md-flex'>|</span> : null}
          <Link to='/home/profile/edit-profile' className='link-rm-line link-text bg-grey-light d-flex gap-2 align-items-center d-flex flex-column'>
            <FiEdit2 size={20}/>
            <span className='fw-normal'>Edit Profile</span>
          </Link>
        </div>
      </div>
      <div className='d-flex flex-column align-items-center'>
        <span className='fw-semibold fs-5 color-text-6'>{name}</span>
        <span className='fw-light color-text-6'>{phone}</span>
      </div>
    </>
  );
};

function Profile() {
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const profile = useSelector((state)=> state.user.profile);
  const successMsg = useSelector(state => state.user.successUpdateMsg);
  const onLogout = () => {
    dispatch(logout());
  };
  React.useEffect(()=>{
    dispatch(getProfileCurrentUser());
    if(successMsg != null) {
      setTimeout(() => {
        dispatch(getProfileCurrentUser());
      }, 3000);
    }
  }, [dispatch, successMsg]);
  const fullNameUser = `${profile.first_name} ${profile.last_name}`;
  return (
    <>
      <NavbarDashboard titlePage='OPo - profile'/>
      <Container as='section' className='g-0'>
        <Row className='pt-5 gx-0 gx-md-3'>
          <SideBarMenu />
          <ContentLayout
            child={
              <>
                <div className='d-flex flex-column gap-3'>
                  <HeaderProfile
                    alt={'imgProfile'}
                    imgUrl={`${profile.photo_url}`}
                    name={fullNameUser}
                    phone={profile.phone_number}
                    to='/home/profile'
                  />
                  <Row>
                    <Col
                      sm={12}
                      className='d-flex flex-row justify-content-center'
                    >
                      <div className='d-flex flex-column gap-3 px-2 px-sm-5 w-75'>
                        <ButtonMenuProfile
                          menuName='Personal Information'
                          to='details'
                          suffixIcon={
                            <FiArrowRight
                              size={24}
                              className='color-btn-text-profile d-none d-sm-flex'
                            />
                          }
                        />
                        <ButtonMenuProfile
                          menuName='Change Password'
                          to='change-password'
                          suffixIcon={
                            <FiArrowRight
                              size={24}
                              className='color-btn-text-profile d-none d-sm-flex'
                            />
                          }
                        />
                        <ButtonMenuProfile
                          menuName='Change PIN'
                          to='change-pin'
                          suffixIcon={
                            <FiArrowRight
                              size={24}
                              className='color-btn-text-profile d-none d-sm-flex'
                            />
                          }
                        />
                        <ButtonMenuProfile
                          menuName='Logout'
                          logout={onLogout}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </>
            }
          />
        </Row>
      </Container>
      <FooterDashboard />
    </>
  );
}

export default Profile;
