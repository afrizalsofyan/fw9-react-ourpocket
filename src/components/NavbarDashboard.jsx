import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import UserPhoto from "../assets/images/img/img3.png";
import { FiBell, FiArrowDown, FiArrowUp } from "react-icons/fi";
import { DropdownButton, Image } from "react-bootstrap";
import {
  NotificationCardHeader,
  NotificationCardItem,
} from "./NotificationCard";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { MenuNavbar } from './SideBarMenu';
import { Link } from 'react-router-dom';


function NavbarDashboard({titlePage}) {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{titlePage!==null ? titlePage : 'OPo'}</title>
        </Helmet>
      </HelmetProvider>
      <Navbar expand="md" className='w-100 bg-color-2 shadow-md'>
          <Container>
            <Navbar.Brand href="/home/dashboard" className="color-text-2 fs-4 fw-bold">
              OurPocket
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="">
              <Nav className="ms-auto d-flex flex-column flex-sm-row gap-3 align-items-center bell-notification py-4">
                <Link
                  to="/home/profile"
                  className="d-flex d-sm-flex flex-column flex-sm-row gap-3 align-items-center link-rm-line"
                >
                  <Image src={UserPhoto} />
                  <div className="d-flex flex-column color-text-2">
                    <span className="fw-bold">Robert Chandler</span>
                    <span className="fw-light">+62 8139 3877 7946</span>
                  </div>
                </Link>
                
                <DropdownButton
                  align="end"
                  title={<FiBell size={24} className="color-text-2 icon-btn" />}
                  id="dropdown-menu-align-end"
                  variant="none border-0"
                >
                  <NotificationCardHeader title="Today" />
                  <NotificationCardItem
                    eventKey={"1"}
                    icon={<FiArrowDown size={24} className="color-red" />}
                    descTransction="Transfered from Joshua Lee"
                    amount={"220.000"}
                  />
                  <NotificationCardItem
                    eventKey={"2"}
                    icon={<FiArrowDown size={24} className="color-red" />}
                    descTransction="Netflix subscription"
                    amount={"149.000"}
                  />
                  <NotificationCardHeader title="This Week" />
                  <NotificationCardItem
                    eventKey={"3"}
                    icon={<FiArrowDown size={24} className="color-red" />}
                    descTransction="Transfer to Jessica Lee"
                    amount={"Rp100.000"}
                  />
                  <NotificationCardItem
                    eventKey={"4"}
                    icon={<FiArrowUp size={24} className="color-green-light" />}
                    descTransction=" Top up from BNI E-Banking"
                    amount={"300.000"}
                  />
                </DropdownButton>
                <MenuNavbar/>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  )
}

export default NavbarDashboard