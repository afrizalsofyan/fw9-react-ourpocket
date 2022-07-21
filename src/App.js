import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ForgetPassword from './pages/auth/ForgetPassword'
import Login from './pages/auth/Login'
import NewPassword from './pages/auth/NewPassword'
import Register from './pages/auth/Register'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='register' element={<Register/>}></Route>
      <Route path='forgetPassword' element={<ForgetPassword/>}></Route>
      <Route path='/addNewPassword' element={<NewPassword/>}></Route>
    </Routes>
  )
}

export default App
