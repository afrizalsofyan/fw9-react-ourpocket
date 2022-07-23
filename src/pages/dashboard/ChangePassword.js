import React from 'react'
import { ProfileLayout } from "../../components/ContentLayout";
import { Link } from "react-router-dom";
import { FiEyeOff, FiLock, FiPhone } from "react-icons/fi";
import InputField from "../../components/InputField";

function ChangePassword() {
    const [showPass, setShowPass] = React.useState(false)
    const [showNewPass, setShowNewPass] = React.useState(false)
    const [showConfirmPass, setShowConfirmPass] = React.useState(false)
  return (
    <>
      <ProfileLayout
        headerText="Change Password"
        subtitleText="ou must enter your current password and then type your new password twice."
        child={
          <>
            <div class="d-flex flex-row justify-content-center py-2">
              <div class="d-flex flex-column justify-content-center gap-4 w-75">
                <InputField icon={<FiLock size={24} className='bg-grey-light'/>} type={showPass?'text':'password'} placeholder={'Current password'} suffixIcon={<FiEyeOff size={24} className='bg-grey-light' onClick={()=>setShowPass(!showPass)}/>}/>
                <InputField icon={<FiLock size={24} className='bg-grey-light'/>} type={showNewPass?'text':'password'} placeholder={'New password'} suffixIcon={<FiEyeOff size={24} className='bg-grey-light' onClick={()=>setShowNewPass(!showNewPass)}/>}/>
                <InputField icon={<FiLock size={24} className='bg-grey-light'/>} type={showConfirmPass?'text':'password'} placeholder={'Repeat new password'} suffixIcon={<FiEyeOff size={24} className='bg-grey-light' onClick={()=>setShowConfirmPass(!showConfirmPass)}/>}/>
              </div>
            </div>
            <div className='d-grid px-5 my-5'>
                <Link to="../details" className="btn border-0 btn-primary px-4 py-2 color-blue-pm btn-cstm">
                    <span>Change Password</span>
                </Link>
            </div>
          </>
        }
      />
    </>
  )
}

export default ChangePassword