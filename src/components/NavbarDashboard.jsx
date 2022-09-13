import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import UserPhoto from '../assets/images/img/img3.png';
import { FaRegUser } from 'react-icons/fa';
import { FiBell, FiArrowDown, FiArrowUp, FiUser } from 'react-icons/fi';
import { Alert, DropdownButton, Image } from 'react-bootstrap';
import {
  NotificationCardHeader,
  NotificationCardItem,
} from './NotificationCard';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { MenuNavbar } from './SideBarMenu';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileCurrentUser } from '../redux/actionAsync/user';
import { getAllNotification, updateNotification } from '../redux/reducers/notification';
import { convertMoney } from './DetailTransferList';

function NavbarDashboard({ titlePage }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const profile = useSelector((state)=> state.user.profile);
  const notification = useSelector((state)=> state.notification.results);
  const location = useLocation();
  const navigate = useNavigate();
  const [visible, setVisible] = React.useState(false);

  //willmount just render when first load
  React.useEffect(() => {
    dispatch(getProfileCurrentUser());
    dispatch(getAllNotification());
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 1500);
  }, [dispatch, token]);
  const fullNameUser = `${profile?.first_name} ${profile?.last_name}`;
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{titlePage !== null ? titlePage : 'OPo'}</title>
        </Helmet>
      </HelmetProvider>
      {location.state?.errorMsg && (
        <Alert show={visible} variant='danger' >{location.state.errorMsg}</Alert>
      )}
      <Navbar expand='md' className='w-100 bg-color-2 shadow-md cstm-navbar'>
        <Container>
          <Navbar.Brand>
            <Link to='/home/dashboard' className='color-text-2 fs-4 fw-bold text-decoration-none'>
              OurPocket
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' className=''>
            <Nav className='ms-auto d-flex flex-column flex-sm-row gap-3 align-items-center bell-notification py-4'>
              <Link
                to='/home/profile'
                className='d-flex d-sm-flex flex-column flex-sm-row gap-3 align-items-center link-rm-line'
              >
                <div className='d-flex img-profile-navbar-box'>
                  {profile?.photo_url ? <Image src={`${profile?.photo_url}`} alt={fullNameUser} fluid width={100} className='rounded-3'/> : <FiUser size={35} color={'#0d3846'} />}
                </div>
                <div className='d-flex flex-column color-text-2'>
                  <span className='fw-bold'>{fullNameUser}</span>
                  <span className='fw-light'>{profile?.phone_number}</span>
                </div>
              </Link>

              <DropdownButton
                align='end'
                title={
                  <div className='d-flex position-relative'>
                    <FiBell size={24} className='color-text-2 icon-btn' />
                    {notification?.length >= 1 ? <div className='notif-indicator bg-color-6 position-absolute end-0 rounded-circle'></div> : null}
                  </div>
                }
                id='dropdown-menu-align-end'
                variant='none border-0'
              >
                <div className={`${notification?.length >= 1 ? 'notif-layout' : '' } overflow-auto`}>
                  <NotificationCardHeader title={
                    <div className='d-flex justify-content-between border-0 border-bottom w-100 pb-3'>
                      <span>Your Notification</span>
                      {notification?.length >= 1 ? <span className='pointer-button' onClick={()=>{
                        notification && notification?.map(e => dispatch(updateNotification({id: e.id})));
                        dispatch(getAllNotification());
                      }}>Mark all as read</span> : null}
                    </div>
                  } />
                  {notification?.length >= 1 ? notification?.map((e,i) => {
                    return (
                      <div key={i} onClick={() => {
                        dispatch(updateNotification({id: e.id}));
                        navigate('/home/notif-details', {state: {e}});
                      }}>
                        <NotificationCardItem
                          eventKey={i}
                          icon={e.recipient === profile?.username ? <FiArrowDown size={24} className='color-green' /> : <FiArrowUp size={24} className='color-red'/>}
                          descTransction={e.recipient === profile?.username ? 'You recieved amount '+e.transfer_amount : `You transfered to ${e.recipient}`}
                          amount={`${convertMoney(e.transfer_amount)}`}
                        />
                      </div>
                    );
                  }) : <span className='d-flex justify-content-center align-items-center h-100 py-5 notif-empty'>Notification Empty</span>}
                </div>
              </DropdownButton>
              <MenuNavbar />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarDashboard;
