import React from 'react';
import {Routes, Route} from 'react-router-dom';
import PrivateRoute, { PrivateAuthRoute } from './components/PrivateRoute';
import CreatePin from './pages/auth/CreatePin';
import CreatePinSuccess from './pages/auth/CreatePinSuccess';
import ForgetPassword from './pages/auth/ForgetPassword';
import Login from './pages/auth/Login';
import NewPassword from './pages/auth/NewPassword';
import Register from './pages/auth/Register';
import AddNewPhone from './pages/dashboard/AddNewPhone';
import ChangeNewPin from './pages/dashboard/ChangeNewPin';
import ChangePassword from './pages/dashboard/ChangePassword';
import ChangePin from './pages/dashboard/ChangePin';
import Dashboard from './pages/dashboard/Dashboard';
import DetailProfile from './pages/dashboard/DetailProfile';
import EditProfile from './pages/dashboard/EditProfile';
import FailedTransfer from './pages/dashboard/FailedTransfer';
import History from './pages/dashboard/History';
import ManagePhone from './pages/dashboard/ManagePhone';
import NotificationDetail from './pages/dashboard/NotificationDetail';
import Profile from './pages/dashboard/Profile';
import SuccessTransfer from './pages/dashboard/SuccessTransfer';
import TopUp from './pages/dashboard/TopUp';
import Transfer from './pages/dashboard/Transfer';
import TransferAmount from './pages/dashboard/TransferAmount';
import TransferConfirmation from './pages/dashboard/TransferConfirmation';
import TransactionDetail from './pages/dashboard/TransactionDetail';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/auth'>
        <Route path='login' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='forget-password' element={<ForgetPassword/>}></Route>
        <Route path='add-new-password' element={<NewPassword/>}></Route>
        <Route path='create-pin' element={<PrivateRoute><CreatePin/></PrivateRoute>}></Route>
        <Route path='create-pin-success' element={<CreatePinSuccess/>}></Route>
      </Route>
      <Route path='/home'>
        <Route path='dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}></Route>
        <Route path='notif-details' element={<PrivateRoute><NotificationDetail/></PrivateRoute>}></Route>
        <Route path='transaction-details' element={<PrivateRoute><TransactionDetail/></PrivateRoute>}></Route>
        <Route path='history' element={<PrivateRoute><History/></PrivateRoute>}></Route>
        <Route path='transfer' element={<PrivateRoute><Transfer/></PrivateRoute>}></Route>
        <Route path='transfer/:id' element={<PrivateRoute><TransferAmount/></PrivateRoute>}></Route>
        <Route path='transfer/:id/transfer-confirmation' element={<PrivateRoute><TransferConfirmation/></PrivateRoute>}></Route>
        <Route path='transfer/:id/transfer-confirmation/success' element={<PrivateRoute><SuccessTransfer /></PrivateRoute>}></Route>
        <Route path='transfer/:id/transfer-confirmation/failed' element={<PrivateRoute><FailedTransfer /></PrivateRoute>}></Route>
        <Route path='topup' element={<PrivateRoute><TopUp/></PrivateRoute>}></Route>
        <Route path='profile'>
          <Route index element={<PrivateRoute><Profile/></PrivateRoute>}/>
          <Route path='edit-profile' element={<PrivateRoute><EditProfile/></PrivateRoute>}></Route>
          <Route path='change-password' element={<PrivateRoute><ChangePassword/></PrivateRoute>}></Route>
          <Route path='change-pin'>
            <Route index element={<PrivateRoute><ChangePin/></PrivateRoute>}></Route>
            <Route path='new-pin' element={<PrivateRoute><ChangeNewPin/></PrivateRoute>}></Route>
          </Route>
          <Route path='details' >
            <Route index element={<PrivateRoute><DetailProfile/></PrivateRoute>}/>
            <Route path='manage-phone' >
              <Route index element={<PrivateRoute><ManagePhone /></PrivateRoute>}/>
              <Route path='add-phone' element={<PrivateRoute><AddNewPhone /></PrivateRoute>}/>
            </Route>
          </Route>
        </Route>
        
      </Route>
    </Routes>
  );
}

export default App;
