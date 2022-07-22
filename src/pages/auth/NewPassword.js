import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {FiLock, FiEyeOff} from 'react-icons/fi'
import InputField from '../../components/InputField'
import AuthBanner from '../../components/AuthBanner'
import TitleAuthForm from '../../components/TitleAuthForm'
import ButtonAuth from '../../components/ButtonAuth'

function NewPassword() {
    const [showPass, setShowPass] = React.useState(false)
    const [showConfirmPass, setShowConfirmPass] = React.useState(false)
  return (
    <Row className='gx-0'>
        <AuthBanner/>
        <Col xs={12} md={5} className='px-5 py-5 d-flex flex-column justify-content-center bg-white gap-5'>
            <div className="d-flex flex-column gap-5">
                <TitleAuthForm title={'Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users'} subtitle={'Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!'}/>
                <InputField icon={<FiLock size={24} className='bg-grey-light'/>} type={showPass?'text':'password'} placeholder={'Create new password'} suffixIcon={<FiEyeOff size={24} className='bg-grey-light' onClick={()=>setShowPass(!showPass)}/>}/>
                <InputField icon={<FiLock size={24} className='bg-grey-light'/>} type={showConfirmPass?'text':'password'} placeholder={'Confirm new password'} suffixIcon={<FiEyeOff size={24} className='bg-grey-light' onClick={()=>setShowConfirmPass(!showConfirmPass)}/>}/>
            </div>
            <ButtonAuth link={'/auth/login'} textButton={'Reset Password'} />
        </Col>
    </Row>
  )
}

export default NewPassword