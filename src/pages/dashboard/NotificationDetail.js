import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import DetailsContentLayout from '../../components/DetailsItemLayour';
import { convertMoney } from '../../components/DetailTransferList';

const NotificationDetail = () => {
  const navigate = useNavigate();
  const params = useLocation().state.e;
  const profile = useSelector(state => state.user.profile);
  const newDate = new Date(params.time_transaction).toLocaleDateString();
  const newTime = new Date(params.time_transaction).toLocaleTimeString();
  const nameSub = ['Type Transaction', 'Recipient Name', 'Recipient Phone', 'Time Transaction', 'Amount'];
  const contentSub = [params.recipient === profile.username ? 'accept' : 'send', params.recipient, params.recipient_phone ? params.recipient_phone : '-', newDate + ' '+ newTime, convertMoney(params.transfer_amount)];
  return (
    <DetailsContentLayout title='Details Notification' noPhoto={params.photo_url ? false : true} photo={params.photo_url} nameSub={nameSub} contentSub={contentSub} btnText='Back to Dashboard' onClick={() => navigate(-1)} />
  );
};

export default NotificationDetail;

