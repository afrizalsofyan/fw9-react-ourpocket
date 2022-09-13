import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import DetailsContentLayout from '../../components/DetailsItemLayour';
import { convertMoney } from '../../components/DetailTransferList';

const TransactionDetail = () => {
  const navigate = useNavigate();
  const params = useLocation().state.param;
  const profile = useSelector(state => state.user.profile);
  const newDate = new Date(params.time_transaction).toLocaleDateString();
  const newTime = new Date(params.time_transaction).toLocaleTimeString();
  const nameSub = ['Status', 'Recipient Name', params.sender === 'topup' ? 'Payment Method' : 'Sender Name', 'Notes', 'Type Transaction', 'Time Transaction', 'Amount'];
  const contentSub = [params.recipient === profile.username || params.sender === 'topup' ? 'accept' : 'send', params.recipient, params.sender === 'topup' ? 'ATM Transfer' : params.sender, params.notes ?? '-', params.type, newDate + ' '+ newTime, convertMoney(params.amount)];
  console.log(params);
  return (
    <DetailsContentLayout title='Transaction Details' noPhoto={params.image_recipient ? false : true} photo={params.image_recipient} nameSub={nameSub} contentSub={contentSub} btnText='Back to Dashboard' onClick={() => navigate('/home/dashboard')} />
    // <DetailsContentLayout title='Details Notification' noPhoto={params.photo_url ? false : true} photo={params.photo_url} nameSub={nameSub} contentSub={contentSub} btnText='Back to Dashboard' onClick={() => navigate('/home/dashboard')} />
  );
};

export default TransactionDetail;
