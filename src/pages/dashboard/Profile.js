import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContentLayout from "../../components/ContentLayout";
import NavbarDashboard from "../../components/NavbarDashboard";
import SideBarMenu from "../../components/SideBarMenu";
import FooterDashboard from "../../components/FooterDashboard";
import Img1 from "../../assets/images/img/img3.png";
import { FiArrowRight, FiEdit2 } from "react-icons/fi";
import { ButtonMenuProfile } from "../../components/ButtonAuth";

export const HeaderProfile = ({ to, imgUrl, alt, name, phone }) => {
  return (
    <>
      <div className="d-flex flex-column align-items-center gap-3">
        <img className="img-fluid" src={imgUrl} alt={alt} />
        <Link to={to} className="link-rm-line link-text bg-grey-light">
          <FiEdit2 />
          <span className="fw-light">Edit</span>
        </Link>
      </div>
      <div className="d-flex flex-column align-items-center">
        <span className="fw-semibold fs-5 color-text-6">{name}</span>
        <span className="fw-light color-text-6">{phone}</span>
      </div>
    </>
  );
};

function Profile() {
  return (
    <>
      <NavbarDashboard titlePage='OPo - profile'/>
      <Container as="section" className="g-0">
        <Row className="pt-5 gx-0 gx-md-3">
          <SideBarMenu />
          <ContentLayout
            child={
              <>
                <div className="d-flex flex-column gap-3">
                  <HeaderProfile
                    alt={"imgProfile"}
                    imgUrl={Img1}
                    name="Samuel Suhi"
                    phone="+62 813-8492-9994"
                    to="/home/profile"
                  />
                  <Row>
                    <Col
                      sm={12}
                      className="d-flex flex-row justify-content-center"
                    >
                      <div className="d-flex flex-column gap-3 px-2 px-sm-5 w-75">
                        <ButtonMenuProfile
                          menuName="Personal Information"
                          to="details"
                          suffixIcon={
                            <FiArrowRight
                              size={24}
                              className="color-btn-text-profile d-none d-sm-flex"
                            />
                          }
                        />
                        <ButtonMenuProfile
                          menuName="Change Password"
                          to="changePassword"
                          suffixIcon={
                            <FiArrowRight
                              size={24}
                              className="color-btn-text-profile d-none d-sm-flex"
                            />
                          }
                        />
                        <ButtonMenuProfile
                          menuName="Change PIN"
                          to="changePin"
                          suffixIcon={
                            <FiArrowRight
                              size={24}
                              className="color-btn-text-profile d-none d-sm-flex"
                            />
                          }
                        />
                        <ButtonMenuProfile
                          menuName="Logout"
                          to="/auth/login"
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
