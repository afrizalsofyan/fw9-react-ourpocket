import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CreatePin from './pages/auth/CreatePin'
import CreatePinSuccess from './pages/auth/CreatePinSuccess'
import ForgetPassword from './pages/auth/ForgetPassword'
import Login from './pages/auth/Login'
import NewPassword from './pages/auth/NewPassword'
import Register from './pages/auth/Register'
import Dashboard from './pages/dashboard/Dashboard'
import FailedTransfer from './pages/dashboard/FailedTransfer'
import History from './pages/dashboard/History'
import Profile from './pages/dashboard/Profile'
import SuccessTransfer from './pages/dashboard/SuccessTransfer'
import TopUp from './pages/dashboard/TopUp'
import Transfer from './pages/dashboard/Transfer'
import TransferAmount from './pages/dashboard/TransferAmount'
import TransferConfirmation from './pages/dashboard/TransferConfirmation'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/auth'>
        <Route path='login' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='forgetPassword' element={<ForgetPassword/>}></Route>
        <Route path='addNewPassword' element={<NewPassword/>}></Route>
        <Route path='createPin' element={<CreatePin/>}></Route>
        <Route path='createPinSuccess' element={<CreatePinSuccess/>}></Route>
      </Route>
      <Route path='/home'>
        <Route path='dashboard' element={<Dashboard/>}></Route>
        <Route path='history' element={<History/>}></Route>
        <Route path='transfer' element={<Transfer/>}></Route>
        <Route path='transfer/:id' element={<TransferAmount/>}></Route>
        <Route path='transfer/:id/tranferConfirmation' element={<TransferConfirmation/>}></Route>
        <Route path='transfer/:id/tranferConfirmation/success' element={<SuccessTransfer />}></Route>
        <Route path='transfer/:id/tranferConfirmation/failed' element={<FailedTransfer />}></Route>
        <Route path='topup' element={<TopUp/>}></Route>
        <Route path='profile' element={<Profile/>}></Route>
      </Route>
    </Routes>
  )
}

export default App
