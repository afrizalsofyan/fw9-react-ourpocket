import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {FiMail, FiLock, FiEyeOff, FiUser} from 'react-icons/fi'
import InputField from '../../components/InputField'
import AuthBanner from '../../components/AuthBanner'
import TitleAuthForm from '../../components/TitleAuthForm'
import ButtonAuth from '../../components/ButtonAuth'
import {Link} from 'react-router-dom'

function Register() {
  const [showPass, setShowPass] = React.useState(false)
  return (
    <Row className='gx-0'>
        <AuthBanner/>
        <Col xs={12} md={5} className='px-5 py-5 d-flex flex-column justify-content-center bg-white gap-5'>
            <div className="d-flex flex-column gap-5">
                <TitleAuthForm title={'Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users'} subtitle={'Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!'}/>
                <InputField icon={<FiUser size={24} className='bg-grey-light'/>} type='text' placeholder='Enter your username'/>
                <InputField icon={<FiMail size={24} className='bg-grey-light'/>} type='text' placeholder='Enter your e-mail'/>
                <InputField icon={<FiLock size={24} className='bg-grey-light'/>} type={showPass?'text':'password'} placeholder='Enter your password' suffixIcon={<FiEyeOff size={24} className='bg-grey-light' onClick={()=>setShowPass(!showPass)}/>}/>
            </div>
            <ButtonAuth link={'/auth/createPin'} textButton={'Sign Up'} />
            <div className="text-center">
                <span>Already have an account? Let's <Link to='/login' className="link-rm-line fw-bold">Login</Link></span>
            </div>
        </Col>
    </Row>
  )
}

export default Register