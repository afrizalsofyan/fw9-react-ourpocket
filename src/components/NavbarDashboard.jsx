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
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileCurrentUser } from '../redux/actionAsync/user';


function NavbarDashboard({ titlePage }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const profile = useSelector((state)=> state.user.profile);
  const location = useLocation();
  const [visible, setVisible] = React.useState(false);

  //willmount just render when first load
  React.useEffect(() => {
    dispatch(getProfileCurrentUser());
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
                title={<FiBell size={24} className='color-text-2 icon-btn' />}
                id='dropdown-menu-align-end'
                variant='none border-0'
              >
                <NotificationCardHeader title='Today' />
                <NotificationCardItem
                  eventKey={'1'}
                  icon={<FiArrowDown size={24} className='color-red' />}
                  descTransction='Transfered from Joshua Lee'
                  amount={'220.000'}
                />
                <NotificationCardItem
                  eventKey={'2'}
                  icon={<FiArrowDown size={24} className='color-red' />}
                  descTransction='Netflix subscription'
                  amount={'149.000'}
                />
                <NotificationCardHeader title='This Week' />
                <NotificationCardItem
                  eventKey={'3'}
                  icon={<FiArrowDown size={24} className='color-red' />}
                  descTransction='Transfer to Jessica Lee'
                  amount={'Rp100.000'}
                />
                <NotificationCardItem
                  eventKey={'4'}
                  icon={<FiArrowUp size={24} className='color-green-light' />}
                  descTransction='Top up from BNI E-Banking'
                  amount={'300.000'}
                />
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