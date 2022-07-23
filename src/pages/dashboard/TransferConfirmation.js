import React from "react";
import { Button, Container, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContentLayout from "../../components/ContentLayout";
import FooterDashboard from "../../components/FooterDashboard";
import NavbarDashboard from "../../components/NavbarDashboard";
import SideBarMenu from "../../components/SideBarMenu";
import { UserCard } from "../../components/UserCard";
import Img3 from "../../assets/images/img/img3.png";
import DetailTransferList from "../../components/DetailTransferList";
import ModalTransferConfirmation from "../../components/ModalTransferConfirmation";

function TransferConfirmation() {
  const [showModal, setShowModal] = React.useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);
  return (
    <>
      <NavbarDashboard />
      <Container as="section" className="g-0">
        <Row className="pt-5 gx-0 gx-md-3">
          <SideBarMenu />
          <ContentLayout
            child={
              <>
                <div>
                  <span className="fs-5 fw-bold">Transfer To</span>
                </div>
                {/* User Card */}
                <UserCard
                  url={"/home/transfer/3"}
                  img_path={Img3}
                  name="Samuel Suhi"
                  phone={"+62 813-8492-9994"}
                />
                {/* Title Detail */}
                <div>
                  <span className="fw-semibold">Details</span>
                </div>
                {/* List */}
                <DetailTransferList/>
                {/* Button Modal */}
                <div className='w-25 ms-auto mt-5 me-auto me-sm-0 d-grid'>
                    <Button
                    className="btn btn-primary color-blue-pm btn-cstm py-2"
                    onClick={openModal}
                    >
                    Continue
                    </Button>
                </div>
                <ModalTransferConfirmation show={showModal} onHide={closeModal}/>
              </>
            }
          />
        </Row>
      </Container>
      <FooterDashboard />
    </>
  );
}

export default TransferConfirmation;
