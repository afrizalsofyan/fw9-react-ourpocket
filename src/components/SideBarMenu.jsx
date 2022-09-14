import React from 'react';
import { Col, Image, Button } from 'react-bootstrap';
import { FiArrowUp, FiGrid, FiLogOut, FiPlus, FiUser } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import ActiveIcon from '../assets/images/icons/active-mark.png';
import { logout } from '../redux/reducers/auth';

export const MenuNavbar = () => {
  const pathUrl = useLocation().pathname;
  const {id} = useParams();
  return (
    <Col className='mb-5 mb-lg-0 d-flex d-sm-none menu-navbar-collapse'>
      <div className='w-100 d-flex flex-column justify-content-between bg-white ps-3 pe-5 py-5 rounded-5 shadow-sm'>
        <ul className='d-flex flex-column nav nav-tabs border-0 pe-5 gap-4'>
          <li className='nav-item'>
            <Link
              to='/home/dashboard'
              className={`nav-link not-act border-0 d-flex flex-row gap-4 align-items-center ${pathUrl === '/home/dashboard' || pathUrl === '/home/history' ? 'active fw-bold' : ''}`}
            >
              {pathUrl === '/home/dashboard' || pathUrl === '/home/history' ? <Image src={ActiveIcon} alt='activeimg' /> : null}
              <FiGrid size={24} />
              <span className='fs-5'>Dashboard</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/home/transfer'
              className={`nav-link not-act border-0 d-flex flex-row gap-4 align-items-center ${pathUrl === '/home/transfer' || pathUrl === `/home/transfer/${id}` || pathUrl === `/home/transfer/${id}/tranferConfirmation` || pathUrl === `/home/transfer/${id}/tranferConfirmation/success` || pathUrl === `/home/transfer/${id}/tranferConfirmation/failed` ? 'active fw-bold' : ''}`}
            >
              {pathUrl === '/home/transfer' || pathUrl === `/home/transfer/${id}` || pathUrl === `/home/transfer/${id}/tranferConfirmation` || pathUrl === `/home/transfer/${id}/tranferConfirmation/success` || pathUrl === `/home/transfer/${id}/tranferConfirmation/failed` ? <Image src={ActiveIcon} alt='activeimg' /> : null}
              <FiArrowUp size={24} />
              <span className='fs-5'>Transfer</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/home/topup'
              className={`nav-link not-act border-0 d-flex flex-row gap-4 align-items-center ${pathUrl === '/home/topup' ? 'active fw-bold' : ''}`}
            >
              {pathUrl === '/home/topup' ? <Image src={ActiveIcon} alt='activeimg' /> : null}
              <FiPlus size={24} />
              <span className='fs-5'>TopUp</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/home/profile'
              className={`nav-link not-act border-0 d-flex flex-row gap-4 align-items-center ${pathUrl === '/home/profile' || pathUrl === '/home/profile/details' || pathUrl === '/home/profile/details' || pathUrl === '/home/profile/details/managePhone' || pathUrl === '/home/profile/details/managePhone/addPhone' || pathUrl === '/home/profile/changePin' || pathUrl === '/home/profile/changePin/newPin' || pathUrl === '/home/profile/changePassword' ? 'active fw-bold' : ''}`}
            >
              {pathUrl === '/home/profile' || pathUrl === '/home/profile/details' || pathUrl === '/home/profile/details' || pathUrl === '/home/profile/details/managePhone' || pathUrl === '/home/profile/details/managePhone/addPhone' || pathUrl === '/home/profile/changePin' || pathUrl === '/home/profile/changePin/newPin' || pathUrl === '/home/profile/changePassword' ? <Image src={ActiveIcon} alt='activeimg' /> : null}
              <FiUser size={24} />
              <span className='fs-5'>Profile</span>
            </Link>
          </li>
        </ul>
        <div className='ps-3 pb-4 py-4'>
          <Link
            to='/auth/login'
            className='nav-link not-act border-0 d-flex flex-row gap-4 align-items-center'
          >
            <FiLogOut size={24} />
            <span className='fs-5'>Log out</span>
          </Link>
        </div>
      </div>
    </Col>
  );
};

function SideBarMenu() {
  const dispatch = useDispatch();

  const pathUrl = useLocation().pathname;
  const {id} = useParams();
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <Col sm={12} lg={3} as='aside' className='mb-5 mb-lg-0 d-none d-sm-flex'>
      <div className='w-100 d-flex flex-column justify-content-between bg-white ps-3 pe-5 py-5 rounded-5 shadow-sm'>
        <ul className='d-flex flex-column nav nav-tabs border-0 pe-5 gap-4'>
          <li className='nav-item'>
            <Link
              to='/home/dashboard'
              className={`nav-link not-act border-0 d-flex flex-row gap-4 align-items-center ${pathUrl === '/home/dashboard' || pathUrl === '/home/history' ? 'active fw-bold' : ''}`}
            >
              {pathUrl === '/home/dashboard' || pathUrl === '/home/history' ? <Image src={ActiveIcon} alt='activeimg' /> : null}
              <FiGrid size={24} />
              <span className='fs-5'>Dashboard</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/home/transfer'
              className={`nav-link not-act border-0 d-flex flex-row gap-4 align-items-center ${pathUrl === '/home/transfer' || pathUrl === `/home/transfer/${id}` || pathUrl === `/home/transfer/${id}/tranfer-confirmation` || pathUrl === `/home/transfer/${id}/tranfer-confirmation/success` || pathUrl === `/home/transfer/${id}/tranfer-confirmation/failed` ? 'active fw-bold' : ''}`}
            >
              {pathUrl === '/home/transfer' || pathUrl === `/home/transfer/${id}` || pathUrl === `/home/transfer/${id}/tranfer-confirmation` || pathUrl === `/home/transfer/${id}/tranfer-confirmation/success` || pathUrl === `/home/transfer/${id}/tranfer-confirmation/failed` ? <Image src={ActiveIcon} alt='activeimg' /> : null}
              <FiArrowUp size={24} />
              <span className='fs-5'>Transfer</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/home/topup'
              className={`nav-link not-act border-0 d-flex flex-row gap-4 align-items-center ${pathUrl === '/home/topup' ? 'active fw-bold' : ''}`}
            >
              {pathUrl === '/home/topup' ? <Image src={ActiveIcon} alt='activeimg' /> : null}
              <FiPlus size={24} />
              <span className='fs-5'>TopUp</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/home/profile'
              className={`nav-link not-act border-0 d-flex flex-row gap-4 align-items-center ${pathUrl === '/home/profile' || pathUrl === '/home/profile/details' || pathUrl === '/home/profile/details' || pathUrl === '/home/profile/details/manage-phone' || pathUrl === '/home/profile/details/manage-phone/add-phone' || pathUrl === '/home/profile/change-pin' || pathUrl === '/home/profile/change-pin/new-pin' || pathUrl === '/home/profile/change-password' ? 'active fw-bold' : ''}`}
            >
              {pathUrl === '/home/profile' || pathUrl === '/home/profile/details' || pathUrl === '/home/profile/details' || pathUrl === '/home/profile/details/manage-phone' || pathUrl === '/home/profile/details/manage-phone/add-phone' || pathUrl === '/home/profile/change-pin' || pathUrl === '/home/profile/change-pin/new-pin' || pathUrl === '/home/profile/change-password' ? <Image src={ActiveIcon} alt='activeimg' /> : null}
              <FiUser size={24} />
              <span className='fs-5'>Profile</span>
            </Link>
          </li>
        </ul>
        <div className='ps-3 pb-4 py-4'>
          <Button
            className='nav-link not-act border-0 d-flex flex-row gap-4 align-items-center bg-transparent shadow-none'
            onClick={onLogout}
          >
            <FiLogOut size={24} />
            <span className='fs-5'>Log out</span>
          </Button>
        </div>
      </div>
    </Col>
  );
}

export default SideBarMenu;
