import React from 'react';
import NavbarDashboard from '../../components/NavbarDashboard';
import { Container, Col, Row, Spinner } from 'react-bootstrap';
import SideBarMenu from '../../components/SideBarMenu';
import FooterDashboard from '../../components/FooterDashboard';
import DashboardBalanceInfo from '../../components/DashboardBalanceInfo';
import ChartInfoDashboard from '../../components/ChartInfoDashboard';
import TransactionInfoDashboard from '../../components/TransactionInfoDashboard';
import { useDispatch, useSelector } from 'react-redux';
import { getSomeTransaction } from '../../redux/actionAsync/transaction';
import { getProfileCurrentUser } from '../../redux/actionAsync/user';
import { store } from '../../redux/store';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const history = useSelector(() => store.getState().transaction.someResult);
  React.useEffect(()=>{
    dispatch(getSomeTransaction());
    dispatch(getProfileCurrentUser());
  }, []);
  return (
    <>
      {profile != null && history != null ? 
        <>
          {/* HEADER NAVBAR */}
          <NavbarDashboard titlePage='OPo - Dashboard'/>
          {/* SIDEBAR */}
          <Container as='section' className='g-0'>
            <Row className='d-flex pt-5 gx-0 gx-sm-3'>
              <SideBarMenu />
              <Col
                sm={12}
                lg={9}
                className='d-flex flex-column justify-content-between gap-4'
              >
                <Row className='gx-0'>
                  <Col sm={12} className='d-flex flex-column gap-5 gap-md-4'>
                    <DashboardBalanceInfo/>
                    <Row className='gx-0 gx-sm-2 d-flex flex-column flex-md-row gap-5 gap-md-0'>
                      <ChartInfoDashboard/>
                      <TransactionInfoDashboard/>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <FooterDashboard/> 
        </>
        : <div className='min-vh-100 d-flex flex-row justify-content-center align-items-center'><Spinner animation='grow' variant='info' /></div>}
    </>
  );
}

export default Dashboard;
