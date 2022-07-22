import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import UserPhoto from "../../assets/images/img/img3.png";
import { FiBell, FiArrowDown, FiArrowUp } from "react-icons/fi";
import { Dropdown, DropdownButton, Image } from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Navbar bg="white" expand="md" className="mw-100 m-0">
        <Container>
          <Navbar.Brand href="#home" className="logo-txt-blue">
            OurPocket
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <Nav className="ms-auto d-flex flex-column flex-sm-row gap-3 align-items-center bell-notification py-4">
              
              <Nav.Link
                href="#link"
                className="d-flex d-sm-flex flex-column flex-sm-row gap-3 align-items-center color-dark"
              >
                <Image src={UserPhoto} />
                <div class="d-flex flex-column">
                  <span class="fw-bold">Robert Chandler</span>
                  <span class="fw-light">+62 8139 3877 7946</span>
                </div>
              </Nav.Link>
              <DropdownButton
                align="end"
                title={<FiBell size={24} className="bg-grey-light icon-btn" />}
                id="dropdown-menu-align-end"
                variant="none border-0"
              >
                <Dropdown.Header>Today</Dropdown.Header>
                <Dropdown.Item eventKey="1">
                  <div class="card border-0 shadow-sm cstm-card">
                    <div class="card-body">
                      <div class="d-flex flex-row gap-3">
                        <div>
                          {
                            <FiArrowDown
                              size={24}
                              className="color-green-light"
                            />
                          }
                        </div>
                        <div class="d-flex flex-column gap-2">
                          <span class="fnt-desc2">
                            Transfered from Joshua Lee
                          </span>
                          <span class="fw-bold">Rp220.000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item eventKey="2">
                  <div class="card border-0 shadow-sm cstm-card">
                    <div class="card-body">
                      <div class="d-flex flex-row gap-3">
                        <div>
                          {<FiArrowUp size={24} className="color-red" />}
                        </div>
                        <div class="d-flex flex-column gap-2">
                          <span class="fnt-desc2">Netflix subscription</span>
                          <span class="fw-bold">Rp149.000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dropdown.Item>
                <Dropdown.Header>This Week</Dropdown.Header>
                <Dropdown.Item eventKey="1">
                  <div class="card border-0 shadow-sm cstm-card">
                    <div class="card-body">
                      <div class="d-flex flex-row gap-3">
                        <div>
                          {<FiArrowUp size={24} className="color-red" />}
                        </div>
                        <div class="d-flex flex-column gap-2">
                          <span class="fnt-desc2">Transfer to Jessica Lee</span>
                          <span class="fw-bold">Rp100.000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item eventKey="2">
                  <div class="card border-0 shadow-sm cstm-card">
                    <div class="card-body">
                      <div class="d-flex flex-row gap-3">
                        <div>
                          {
                            <FiArrowDown
                              size={24}
                              className="color-green-light"
                            />
                          }
                        </div>
                        <div class="d-flex flex-column gap-2">
                          <span class="fnt-desc2">
                            Top up from BNI E-Banking
                          </span>
                          <span class="fw-bold">Rp300.000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dropdown.Item>
              </DropdownButton>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default Dashboard;
