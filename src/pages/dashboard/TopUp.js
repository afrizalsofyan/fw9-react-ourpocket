import React from 'react';
import { Alert, Button, Container, Form, Modal, Row } from 'react-bootstrap';
import ContentLayout from '../../components/ContentLayout';
import NavbarDashboard from '../../components/NavbarDashboard';
import SideBarMenu from '../../components/SideBarMenu';
import FooterDashboard from '../../components/FooterDashboard';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ButtonSubmit } from '../../components/ButtonAuth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { topupBalanceTransaction } from '../../redux/actionAsync/transaction';
import { getProfileCurrentUser } from '../../redux/actionAsync/user';
import {store} from '../../redux/store';

const topupSchema = Yup.object().shape({
  amount: Yup.number().typeError('Must number only').min(50000, 'Must be greater than Rp. 50.000,00').max(8000000, 'Maximum topup is Rp. 8.000.000,00').required(),
});

const ModalTopup = (props) => {
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const profile = useSelector(state => state.user.profile);
  const successMsg = useSelector(() => store.getState().transaction.sucessMsg);
  const [show, setShow] = React.useState(false);
  const onSubmitTopup = (val)=>{
    dispatch(topupBalanceTransaction(val));
    if (successMsg != null || successMsg !== undefined) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 5000);
      setTimeout(() => {
        redirect('/home/dashboard');
      }, 5000);
    }
  };
  React.useEffect(()=>{
    if(profile.phone_number == null){
      redirect('/home/profile');
    }
  }, []);
  return (
    <Modal
      {...props}
      size='md'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter' className='color-text-6 fw-bold'>
                Topup Balance
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='color-text-6'>
        <Formik initialValues={{amount: 0, type_id: 16}} validationSchema={topupSchema} onSubmit={onSubmitTopup}>
          {({handleSubmit, handleChange, isValid, errors}) => (
            <>
              <form noValidate onSubmit={handleSubmit}>
                <p className='fs-6'>Input amount you want to topup, then press submit if okay.</p>
                {show && successMsg ?
                  <Alert variant={'success'}>
                    <Alert.Heading>Success Topup</Alert.Heading>
                    <p>You balance increase. Direct to Dashboard...</p>
                  </Alert>
                  : null}
                <Form.Control type='number' className='color-text-6 shadow-none border-0 border-bottom text-center fw-bold my-4 pt-4' placeholder='Input your amount here' onChange={handleChange('amount')} isInvalid={!!errors.amount} isValid={!errors.amount} />
                {errors.amount ? <Form.Control.Feedback type='invalid'>{errors.amount}</Form.Control.Feedback> : null}
                <div className='border-0 d-flex justify-content-center mt-5' onClick={props.onHide}>
                  <ButtonSubmit buttonType={'sm'} disable={!isValid} textButton='Topup' />
                </div>
              </form>;
              {/* <Button onClick={props.onHide}>Close</Button> */}
            </>
          )}
        </Formik> 
      </Modal.Body>
    </Modal>
  );
};

const TopUp = () => {
  
  // const redirect = useNavigate();
  // const successMsg = useSelector(state => state.transaction.sucessMsg);
  
  const [modalShow, setModalShow] = React.useState(false);
  // React.useEffect(()=>{
  //   // if (successMsg != null || successMsg !== undefined) {
  //   // }
    
  // }, []);
  return (
    <>
      <NavbarDashboard titlePage='OPo - topup'/>
      <Container as='section' className='g-0'>
        <Row className='pt-5 gx-0 gx-md-3'>
          <SideBarMenu />
          <ContentLayout
            child={
              <>
                <div>
                  <span className='fw-bold color-text-2 fs-4'>How To Top Up</span>
                </div>
                <div>
                  <ol className='mv-marker'>
                    <div className='card border-0 shadow-sm mt-4 ps-2'>
                      <div className='card-body px-4 py-4'>
                        <li className='num-mark'>
                          <span className='fnt-desc color-text-6'>
                            Go to the nearest ATM or you can use E-Banking.
                          </span>
                        </li>
                      </div>
                    </div>
                    <div className='card border-0 shadow-sm mt-4 ps-2'>
                      <div className='card-body px-4 py-4'>
                        <li className='num-mark'>
                          <span className='fnt-desc color-text-6'>
                            Type your security number on the ATM or E-Banking.
                          </span>
                        </li>
                      </div>
                    </div>
                    <div className='card border-0 shadow-sm mt-4 ps-2'>
                      <div className='card-body px-4 py-4'>
                        <li className='num-mark'>
                          <span className='fnt-desc color-text-6'>
                            Select “Transfer” in the menu.
                          </span>
                        </li>
                      </div>
                    </div>
                    <div className='card border-0 shadow-sm mt-4 ps-2'>
                      <div className='card-body px-4 py-4'>
                        <li className='num-mark'>
                          <span className='fnt-desc color-text-6'>
                            Type the virtual account number that we provide you
                            at the top.
                          </span>
                        </li>
                      </div>
                    </div>
                    <div className='card border-0 shadow-sm mt-4 ps-2'>
                      <div className='card-body px-4 py-4'>
                        <li className='num-mark'>
                          <span className='fnt-desc color-text-6'>
                            Type the amount of the money you want to top up.
                          </span>
                        </li>
                      </div>
                    </div>
                    <div className='card border-0 shadow-sm mt-4 ps-2'>
                      <div className='card-body px-4 py-4'>
                        <li className='num-mark'>
                          <span className='fnt-desc color-text-6'>
                            Read the summary details.
                          </span>
                        </li>
                      </div>
                    </div>
                    <div className='card border-0 shadow-sm mt-4 ps-2'>
                      <div className='card-body px-4 py-4'>
                        <li className='num-mark'>
                          <span className='fnt-desc color-text-6'>Press transfer / top up.</span>
                        </li>
                      </div>
                    </div>
                    <div className='card border-0 shadow-sm mt-4 ps-2'>
                      <div className='card-body px-4 py-4'>
                        <li className='num-mark'>
                          <span className='fnt-desc color-text-6'>
                            You can see your money in Zwallet within 3 hours.
                          </span>
                        </li>
                      </div>
                    </div>
                    <div className='d-grid mt-5'>
                      <Button onClick={() => setModalShow(true)} className='btn-prim-1 shadow-none'>
                        Topup Now
                      </Button>
                      <ModalTopup show={modalShow} onHide={() => {
                        setTimeout(() => {
                          setModalShow(false);
                        }, 3500);
                      }}/>
                    </div>
                  </ol>
                </div>
              </>
            }
          />
        </Row>
      </Container>
      <FooterDashboard />
    </>
  );
};

export default TopUp;
