import { Col, Image, Row } from 'react-bootstrap';
import { ButtonGeneral } from './ButtonAuth';
import { ProfileLayoutDetails } from './ContentLayout';
import AppLogo from '../assets/images/img/app-logo.png';
import { FiUser } from 'react-icons/fi';

const DetailsContentLayout = ({title, photo, noPhoto, nameSub, contentSub, onClick, btnText}) => {
  return (
    <ProfileLayoutDetails
      child={
        <div className=''>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <div className='logo-wrapper'>
              <Image src={AppLogo} fluid />
            </div>
            <div className='fs-3 fw-semibold color-text-6 mt-5'>
              <span>{title}</span>
            </div>
            {/* <div className='img-details-box py-4'>
              {noPhoto ? <div className='p-3 border border-2 rounded-circle border-color-1'><FiUser size={45} color='#0d3846' /></div> : <Image src={photo} fluid />}
            </div> */}
          </div>
          <Row className='color-text-6 d-flex justify-content-center align-items-center mt-5'>
            <Col sm={8}>
              <Row>
                <Col sm={6} className='d-flex flex-column gap-3 fw-light ps-5'>
                  {nameSub?.map((e, i) => {
                    return(
                      <div key={i}>
                        <span>{e}</span>
                      </div>
                    );
                  })}
                </Col>
                <Col sm={6} className='d-flex flex-column gap-3 fw-semibold'>
                  {contentSub?.map((e, i) => {
                    return(
                      <div className='text-truncate' key={i}>
                        <span>: {e}</span>
                      </div>
                    );
                  })}
                </Col>
              </Row>
            </Col>
          </Row>
          <div className='d-flex justify-content-center mt-5'>
            <ButtonGeneral onClick={onClick} textButton={btnText} />
          </div>
        </div>
      } 
    />
  );
};

export default DetailsContentLayout;
