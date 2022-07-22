import React from "react";
import NavbarDashboard from "../../components/NavbarDashboard";
import { Container, Col, Row } from "react-bootstrap";
import SideBarMenu from "../../components/SideBarMenu";
import FooterDashboard from "../../components/FooterDashboard";
import ContentLayout from "../../components/ContentLayout";
import UserCardHistoryIncreaseAmount, {UserCardHistoryDecreaseAmount} from "../../components/UserCard";
import DummyImage1 from "../../assets/images/img/img3.png"
import DummyImage2 from "../../assets/images/icons/logo.png"

function History() {
  return (
    <>
      <NavbarDashboard />
      {/* SIDEBAR */}
      <Container as="section" className="g-0">
        <Row className="pt-5 gx-0 gx-md-3">
          <SideBarMenu />
          <ContentLayout
            child={
              <>
                <h1 class="fw-bold fs-4">Transaction History</h1>
                <div class="d-flex flex-column gap-5 overflow-auto px-md-4">
                  <span class="bg-grey-light fw-bold">This Week</span>
                  <UserCardHistoryIncreaseAmount img_path={DummyImage1} alt='imgDummy1' name='Samuel Suhi' type_transaction='Transfer' amount='+Rp50.000'/>
                  <UserCardHistoryDecreaseAmount img_path={DummyImage2} alt='imgDummy2' name='Netflix' type_transaction='Subscription' amount='-Rp149.000'/>
                  <span class="bg-grey-light fw-bold">This Month</span>
                  <UserCardHistoryDecreaseAmount img_path={DummyImage2} alt='imgDummy2' name='Netflix' type_transaction='Subscription' amount='-Rp149.000'/>
                  <UserCardHistoryIncreaseAmount img_path={DummyImage1} alt='imgDummy1' name='Samuel Suhi' type_transaction='Transfer' amount='+Rp100.000'/>
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

export default History;
