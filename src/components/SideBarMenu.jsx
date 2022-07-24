import React from 'react'
import { Col, Image } from 'react-bootstrap'
import { FiArrowUp, FiGrid, FiLogOut, FiPlus, FiUser } from 'react-icons/fi'
import { Link, useLocation, useParams } from 'react-router-dom'
import ActiveIcon from "../assets/images/icons/active-mark.png";

function SideBarMenu() {
    const pathUrl = useLocation().pathname;
    const {id} = useParams();
    console.log(pathUrl);
    console.log(id);
    return (
        <Col sm={12} lg={3} as="aside" className="mb-5 mb-lg-0 d-flex">
            <div className="w-100 d-flex flex-column justify-content-between bg-white ps-3 pe-5 py-5 rounded-5 shadow-sm">
                <ul className="d-flex flex-column nav nav-tabs border-0 pe-5 gap-4">
                    <li className="nav-item">
                        <Link
                            to="/home/dashboard"
                            className={`nav-link not-act border-0 d-flex flex-row gap-4 align-items-center ${pathUrl === '/home/dashboard' || pathUrl === '/home/history' ? 'active fw-bold' : ''}`}
                        >
                            {pathUrl === '/home/dashboard' || pathUrl === '/home/history' ? <Image src={ActiveIcon} alt="activeimg" /> : null}
                            <FiGrid size={24} />
                            <span className='fs-5'>Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/home/transfer"
                            className={`nav-link not-act border-0 d-flex flex-row gap-4 align-items-center ${pathUrl === '/home/transfer' || pathUrl === `/home/transfer/${id}` || pathUrl === `/home/transfer/${id}/tranferConfirmation` || pathUrl === `/home/transfer/${id}/tranferConfirmation/success` || pathUrl === `/home/transfer/${id}/tranferConfirmation/failed` ? 'active fw-bold' : ''}`}
                        >
                            {pathUrl === '/home/transfer' || pathUrl === `/home/transfer/${id}` || pathUrl === `/home/transfer/${id}/tranferConfirmation` || pathUrl === `/home/transfer/${id}/tranferConfirmation/success` || pathUrl === `/home/transfer/${id}/tranferConfirmation/failed` ? <Image src={ActiveIcon} alt="activeimg" /> : null}
                            <FiArrowUp size={24} />
                            <span className="fs-5">Transfer</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/home/topup"
                            className={`nav-link not-act border-0 d-flex flex-row gap-4 align-items-center ${pathUrl === '/home/topup' ? 'active fw-bold' : ''}`}
                        >
                            {pathUrl === '/home/topup' ? <Image src={ActiveIcon} alt="activeimg" /> : null}
                            <FiPlus size={24} />
                            <span className="fs-5">TopUp</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/home/profile"
                            className={`nav-link not-act border-0 d-flex flex-row gap-4 align-items-center ${pathUrl === '/home/profile' ? 'active fw-bold' : ''}`}
                        >
                            {pathUrl === '/home/profile' ? <Image src={ActiveIcon} alt="activeimg" /> : null}
                            <FiUser size={24} />
                            <span className="fs-5">Profile</span>
                        </Link>
                    </li>
                </ul>
                <div className="ps-3 pb-4 py-4">
                    <Link
                        to="/auth/login"
                        className='nav-link not-act border-0 d-flex flex-row gap-4 align-items-center'
                    >
                        <FiLogOut size={24} />
                        <span className="fs-5">Log out</span>
                    </Link>
                </div>
            </div>
        </Col>
    )
}

export default SideBarMenu