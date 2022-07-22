import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CreatePin from './pages/auth/CreatePin'
import CreatePinSuccess from './pages/auth/CreatePinSuccess'
import ForgetPassword from './pages/auth/ForgetPassword'
import Login from './pages/auth/Login'
import NewPassword from './pages/auth/NewPassword'
import Register from './pages/auth/Register'
import Dashboard from './pages/dashboard/Dashboard'
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
      </Route>
    </Routes>
  )
}

export default App
