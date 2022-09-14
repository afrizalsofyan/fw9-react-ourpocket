import React from 'react';
import { Col, Spinner } from 'react-bootstrap';
import Img1 from '../assets/images/img/img3.png';
import Img2 from '../assets/images/icons/logo.png';
import Img3 from '../assets/images/img/img3.png';
import { Link, Navigate } from 'react-router-dom';
import { CardHistoryDashboard } from './CardDetailList';
import Datadummy from '../helpers/dummydata.json';
import { getSomeTransaction } from '../redux/actionAsync/transaction';
import { connect } from 'react-redux';

class TransactionInfoDashboard extends React.Component {
  componentDidMount() {
    this.props.getSomeTransaction();
  }
  // componentDidUpdate() {
  //   this.props.getSomeTransaction();
  //   console.log(this.props.history);
  // }
  render() {
    const data = this.props.history;
    return (
      <Col sm={12} md={6} className='ps-md-3 height-historyDashboard'>
        <div className='d-flex flex-column bg-white p-4 gap-4 rounded-5 h-100 color-text-6'>
          <div className='d-flex flex-row justify-content-between'>
            <span className='fw-bold fs-6'>Transaction History</span>
            <Link className='link-rm-line' to='/home/history'>
              <span className='fw-light color-text-6'>See all</span>
            </Link>
          </div>
          {/* item max 3 */}
          <div className='d-flex flex-column gap-3 h-100'>
            {data.length > 0 ? data.map((el, index)=>{
              // el.back = 'dashboard';
              return(
                <CardHistoryDashboard imgUrl={`${el.image_recipient}`} type={el.type} amount={el.amount} name={el.recipient} key={el.id} photo={el.image_recipient ? true : false} navigationTo={'/home/transaction-details'} param={el}/>
              );
            }) : <div className='d-flex justify-content-center align-items-center h-100'><Spinner animation='grow' variant='info' /></div>}
          </div>
        </div>
      </Col>
    );
  }
}

const mapStateToProps = state => ({
  history: state.transaction.someResult
  // token: state.token.
});

const mapDispatchToProps = dispatch => ({
  getSomeTransaction: () => {
    dispatch(getSomeTransaction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionInfoDashboard);
