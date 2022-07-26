import React from "react";
import NavbarDashboard from "../../components/NavbarDashboard";
import { Container, Form, InputGroup, Row } from "react-bootstrap";
import SideBarMenu from "../../components/SideBarMenu";
import FooterDashboard from "../../components/FooterDashboard";
import ContentLayout from "../../components/ContentLayout";
import { UserCard } from "../../components/UserCard";

import Img1 from "../../assets/images/img/img1.png";
import Img2 from "../../assets/images/img/img2.png";
import Img3 from "../../assets/images/img/img3.png";
import Img4 from "../../assets/images/img/img4.png";
import { FiSearch } from "react-icons/fi";

function Transfer() {
  return (
    <>
      <NavbarDashboard titlePage='OPo - transfer'/>

      <Container as="section" className="g-0 ">
        <Row className="pt-5 gx-0 gx-md-3">
          <SideBarMenu />
          <ContentLayout
            child={
              <>
                <div className="d-flex flex-row justify-content-between">
                  <span className="fw-bold fs-5 color-text-2">Search Receiver</span>
                </div>
                <InputGroup className="search-input my-4 ">
                  <span className="icon-input">
                    <FiSearch size={24}/>
                  </span>
                  <Form.Control type="text" className="ps-5 border-0 bg-grey-input rounded-3 py-3 color-text-6" placeholder="Search receiver here"/>
                </InputGroup>
                <div className="d-flex flex-column gap-5 py-4 overflow-auto h-75 pe-4">
                  <UserCard
                    url={"/home/transfer/1"}
                    img_path={Img1}
                    name="Jessica Keen"
                    phone={"+62 811-3452-5252"}
                  />
                  <UserCard
                    url={"/home/transfer/2"}
                    img_path={Img2}
                    name="Michael Le"
                    phone={"+62 810-4224-4613"}
                  />
                  <UserCard
                    url={"/home/transfer/3"}
                    img_path={Img3}
                    name="Samuel Suhi"
                    phone={"+62 813-8492-9994"}
                  />
                  <UserCard
                    url={"/home/transfer/4"}
                    img_path={Img4}
                    name="Momo Taro"
                    phone={"+62 812-4343-6731"}
                  />
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

export default Transfer;
