import React from 'react'
import { Col, Image } from 'react-bootstrap'
import { FiArrowUp, FiGrid, FiLogOut, FiPlus, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ActiveIcon from "../assets/images/icons/active-mark.png";

function SideBarMenu() {
    return (
        <Col sm={12} lg={3} as="aside" className="mb-5 mb-lg-0 d-flex">
            <div className="w-100 d-flex flex-column justify-content-between bg-white ps-3 pe-5 py-5 rounded-5 shadow-sm">
                <ul className="d-flex flex-column nav nav-tabs border-0 pe-5 gap-4">
                    <li className="nav-item">
                        <Link
                            to="#"
                            className="nav-link active border-0 d-flex flex-row gap-4 align-items-center"
                        >
                            <Image src={ActiveIcon} alt="activeimg" />
                            <FiGrid size={24} />
                            <span className="fw-bold fs-5">Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="#"
                            className="nav-link not-act link-text border-0 d-flex flex-row gap-4 align-items-center"
                        >
                            <FiArrowUp size={24} />
                            <span className="fw-bold fs-5">Transfer</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="#"
                            className="nav-link not-act link-text border-0 d-flex flex-row gap-4 align-items-center"
                        >
                            <FiPlus size={24} />
                            <span className="fw-bold fs-5">Top Up</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="#"
                            className="nav-link not-act link-text border-0 d-flex flex-row gap-4 align-items-center"
                        >
                            <FiUser size={24} />
                            <span className="fw-bold fs-5">Profile</span>
                        </Link>
                    </li>
                </ul>
                <div className="ps-3 pb-4 py-4">
                    <Link
                        to="#"
                        className="nav-link not-act link-text border-0 d-flex flex-row gap-4 align-items-center"
                    >
                        <FiLogOut size={24} />
                        <span className="fw-bold fs-5">Log out</span>
                    </Link>
                </div>
            </div>
        </Col>
    )
}

export default SideBarMenu