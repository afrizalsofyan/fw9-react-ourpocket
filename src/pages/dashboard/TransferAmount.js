import React from "react";
import NavbarDashboard from "../../components/NavbarDashboard";
import { Container, Form, Row, InputGroup } from "react-bootstrap";
import SideBarMenu from "../../components/SideBarMenu";
import FooterDashboard from "../../components/FooterDashboard";
import ContentLayout from "../../components/ContentLayout";
import { UserCard } from "../../components/UserCard";
import Img3 from "../../assets/images/img/img3.png";
import { FiEdit2 } from "react-icons/fi";
import {Link} from "react-router-dom";

function TransferAmount() {
  return (
    <>
      <NavbarDashboard />
      <Container as="section" className="g-0">
        <Row className="pt-5 gx-0 gx-md-3">
          <SideBarMenu />
          <ContentLayout
            child={
              <>
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex flex-row justify-content-between">
                    <span className="fw-bold fs-5">Transfer Money</span>
                  </div>
                  <UserCard
                    url={"/home/transfer/3"}
                    img_path={Img3}
                    name="Samuel Suhi"
                    phone={"+62 813-8492-9994"}
                  />
                  <div className="text-desc-layout">
                    <span className="bg-grey-light">
                      Type the amount you want to transfer and then press
                      continue to the next steps.
                    </span>
                  </div>
                  <Form>
                    <div className="d-flex flex-row justify-content-center">
                      <div className="d-flex flex-column align-items-center gap-4">
                        <Form.Group className="form-group">
                          <InputGroup className="input-group">
                            <Form.Control type="number"  placeholder="0.00" className="form-control border-0 text-center fs-1 amount-input bg-transparent fw-bold"/>
                          </InputGroup>
                        </Form.Group>
                        <div className="d-flex flex-column flex-sm-row align-items-center">
                          <span className="fs-6 fw-bold">Rp. 120.000</span>
                          <span className="fs-6 fw-bold"> Available</span>
                        </div>
                        <Form.Group className="form-group mt-2 w-100 border-5">
                          <InputGroup className="search-input">
                            <span className="icon-input"><FiEdit2 size={24} className='icon-grey-light'/></span>
                            <Form.Control type="text"  className="ps-5 py-3 notes-custom" placeholder="Add some notes"/>
                          </InputGroup>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-end mt-5 me-5">
                      <Link
                        to="./confirmation.html"
                        className="btn btn-primary px-4 py-2 color-blue-pm btn-cstm"
                      >
                        Continue
                      </Link>
                    </div>
                  </Form>
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

export default TransferAmount;
