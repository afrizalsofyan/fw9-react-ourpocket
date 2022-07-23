import React from 'react'
import { Button, Container, Image, Row } from 'react-bootstrap'
import ContentLayout from '../../components/ContentLayout'
import NavbarDashboard from '../../components/NavbarDashboard'
import SideBarMenu from '../../components/SideBarMenu'
import { UserCard } from '../../components/UserCard'
import Img3 from "../../assets/images/img/img3.png";
import FailedLogo from "../../assets/images/icons/failed.png"
import DetailTransferList from '../../components/DetailTransferList'
import FooterDashboard from '../../components/FooterDashboard'
import { FiDownload, FiShare2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function FailedTransfer() {
  
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
                      <div className='d-flex flex-column align-items-center gap-3'>
                        <Image src={FailedLogo} className='img-fluid'/>
                        <span className="fs-5 fw-bold">Transfer To</span>
                        <div className="px-5">
                          <span className="fnt-desc2">
                              <p className="text-center">We can’t transfer your money at the moment, we recommend you to check your internet connection and try again.</p>
                          </span>
                      </div>
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
                        <Link to="/home/transfer" className="btn btn-primary px-4 py-2 color-blue-pm btn-cstm fw-bold">Try Again</Link>
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

export default FailedTransfer