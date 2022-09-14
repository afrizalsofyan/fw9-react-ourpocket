import React from 'react';
import { Button, Container, Image, Row } from 'react-bootstrap';
import ContentLayout from '../../components/ContentLayout';
import NavbarDashboard from '../../components/NavbarDashboard';
import SideBarMenu from '../../components/SideBarMenu';
import { UserCard } from '../../components/UserCard';
import Img3 from '../../assets/images/img/img3.png';
import SuccessLogo from '../../assets/images/icons/success.png';
import DetailTransferList from '../../components/DetailTransferList';
import FooterDashboard from '../../components/FooterDashboard';
import { FiDownload, FiShare2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function SuccessTransfer() {
  const inputRef = React.useRef(null);
  const profile = useSelector(state => state.user.profile);
  const recipient = useSelector((state)=>state.user.dataUser);
  const onDownloadPdf = () => {
    html2canvas(inputRef.current).then(canvas => {
      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF('p', 'px', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const widthRatio = pageWidth / canvas.width;
      const heightRatio = pageHeight / canvas.height;
      const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;

      const canvasWidth = canvas.width * ratio;
      const canvasHeight = canvas.height * ratio;

      const marginX = (pageWidth - canvasWidth) / 2;
      const marginY = (pageHeight - canvasHeight) / 2;
      pdf.addImage(imgData, 'JPEG', marginX, marginY, canvasWidth, canvasHeight);
      pdf.save(`Transfered-from-${profile?.username}-to-${recipient.username}-${new Date().getTime()}.pdf`);
    });
    // console.log(new Date().getTime());
  };
  return (
    <>
      <NavbarDashboard />
      <Container as='section' className='g-0'>
        <Row className='pt-5 gx-0 gx-md-3'>
          <SideBarMenu />
          <ContentLayout
            child={
              <>
                <div className='d-flex flex-column gap-3'>
                  <div className='d-flex flex-column gap-3' id='toPrintPdf' ref={inputRef}>
                    <div className='d-flex justify-content-center'>
                      <div className='d-flex flex-column gap-3'>
                        <Image src={SuccessLogo}/>
                        <span className='fs-5 fw-bold'>Transfer To</span>
                      </div>
                    </div>                    
                    {/* Title Detail */}
                    <div>
                      {/* List */}
                      <DetailTransferList/> 
                    </div>
                    {/* User Card */}
                    <div className='d-flex flex-column gap 3 ps-2 gap-3'>
                      <span className='fs-6 fw-bold color-text-2'>Transfer To</span>
                      <UserCard
                        url={'/home/transfer/3'}
                        img_path={recipient?.photo_url}
                        name={recipient?.first_name && recipient?.last_name ? `${recipient?.first_name} ${recipient?.last_name}` : recipient?.username}
                        phone={recipient?.phone_number}
                      />
                    </div>
                  </div>
                  <div className='d-flex flex-column flex-md-row justify-content-end mt-5 me-5 gap-3 w-100'>
                    <Button type='submit' className='btn btn-primary px-4 py-2 btn-download-pdf btn-cstm shadow-none'>
                      <FiShare2 size={18} className='color-text-2' />
                    </Button>
                    <Button className='btn btn-primary px-4 py-2 btn-download-pdf btn-cstm color-text-2 shadow-none' onClick={onDownloadPdf}>
                      <FiDownload size={18} className=' me-3'/>
                      <span className='fw-bold '>Download PDF</span>
                    </Button>
                    <Link to='/home/dashboard' className='btn px-4 py-2 btn-prim-1 fw-bold shadow-none'>Back to Home</Link>
                  </div>
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

export default SuccessTransfer;
