import React from 'react'
import { ProfileLayout } from "../../components/ContentLayout";
import { Link } from "react-router-dom";
import { FiEyeOff, FiLock } from "react-icons/fi";
import InputField from "../../components/InputField";

function ChangePassword() {
    const [showPass, setShowPass] = React.useState(false)
    const [showNewPass, setShowNewPass] = React.useState(false)
    const [showConfirmPass, setShowConfirmPass] = React.useState(false)
  return (
    <>
      <ProfileLayout
        headerText="Change Password"
        subtitleText="You must enter your current password and then type your new password twice."
        child={
          <>
            <div className="d-flex flex-row justify-content-center py-2">
              <div className="d-flex flex-column justify-content-center gap-4 w-75">
                <InputField icon={<FiLock size={24} className='color-text-6'/>} type={showPass?'text':'password'} placeholder={'Current password'} suffixIcon={<FiEyeOff size={24} className='color-text-6' onClick={()=>setShowPass(!showPass)}/>}/>
                <InputField icon={<FiLock size={24} className='color-text-6'/>} type={showNewPass?'text':'password'} placeholder={'New password'} suffixIcon={<FiEyeOff size={24} className='color-text-6' onClick={()=>setShowNewPass(!showNewPass)}/>}/>
                <InputField icon={<FiLock size={24} className='color-text-6'/>} type={showConfirmPass?'text':'password'} placeholder={'Repeat new password'} suffixIcon={<FiEyeOff size={24} className='color-text-6' onClick={()=>setShowConfirmPass(!showConfirmPass)}/>}/>
              </div>
            </div>
            <div className='d-grid px-5 my-5'>
                <Link to="../details" className="btn border-0 px-4 py-2 btn-prim-1">
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