import React from 'react'
import { Button, Container, Image, Row } from 'react-bootstrap'
import ContentLayout from '../../components/ContentLayout'
import NavbarDashboard from '../../components/NavbarDashboard'
import SideBarMenu from '../../components/SideBarMenu'
import { UserCard } from '../../components/UserCard'
import Img3 from "../../assets/images/img/img3.png";
import SuccessLogo from "../../assets/images/icons/success.png"
import DetailTransferList from '../../components/DetailTransferList'
import FooterDashboard from '../../components/FooterDashboard'
import { FiDownload, FiShare2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function SuccessTransfer() {
  return (
    <>
      <NavbarDashboard />
      <Container as="section" className="g-0">
        <Row className="pt-5 gx-0 gx-md-3">
          <SideBarMenu />
          <ContentLayout
            child={
              <>
                <div className="d-flex flex-column gap-3">
                    <div className="d-flex justify-content-center">
                      <div className='d-flex flex-column gap-3'>
                        <Image src={SuccessLogo}/>
                        <span className="fs-5 fw-bold">Transfer To</span>
                      </div>
                    </div>                    
                    {/* Title Detail */}
                    <div>
                      {/* List */}
                      <DetailTransferList/> 
                    </div>
                    {/* User Card */}
                    <div className='d-flex flex-column gap 3 ps-2 gap-3'>
                      <span className="fs-6 fw-bold">Transfer To</span>
                      <UserCard
                      url={"/home/transfer/3"}
                      img_path={Img3}
                      name="Samuel Suhi"
                      phone={"+62 813-8492-9994"}
                      />
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-end mt-5 me-5 gap-3 w-100">
                        <Button type="submit" className="btn btn-primary px-4 py-2 btn-download-pdf btn-cstm">
                            <FiShare2 size={18} className="text-dark" />
                        </Button>
                        <Button type="submit" className="btn btn-primary px-4 py-2 btn-download-pdf btn-cstm">
                        <FiDownload size={18} className="txt-color-blue me-3"/>
                            <span className="txt-color-blue fw-bold">Download PDF</span>
                        </Button>
                        <Link to="/home/dashboard" className="btn btn-primary px-4 py-2 color-blue-pm btn-cstm fw-bold">Back to Home</Link>
                    </div>
                </div>
              </>
            }
          />
        </Row>
      </Container>
      <FooterDashboard />
    </>
  )
}

export default SuccessTransfer