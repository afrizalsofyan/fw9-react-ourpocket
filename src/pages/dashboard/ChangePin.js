import React from 'react'
import { Link } from 'react-router-dom'
import { ProfileLayout } from '../../components/ContentLayout'
import { InputPin } from '../../components/InputField'

function ChangePin() {
  return (
    <>
    <ProfileLayout
      headerText="Change PIN"
      subtitleText="Enter your current 6 digits OurPocket PIN below to continue to the next steps."
      child={
        <>
          <div className="d-flex flex-row justify-content-center py-5">
            <div className="px-5 d-flex flex-column gap-5 justify-content-center">
              <div className="d-flex flex-row pin-wrapper gap-2 gap-md-2 gap-lg-4 justify-content-center">
                <InputPin/>
                <InputPin/>
                <InputPin/>
                <InputPin/>
                <InputPin/>
                <InputPin/>
              </div>
            </div>
          </div>
          <div className='d-grid px-5 mb-5 w-75 mx-auto'>
              <Link to="newPin" className="btn border-0 btn-primary px-4 py-2 color-blue-pm btn-cstm">
                  <span>Confirm</span>
              </Link>
          </div>
        </>
      }
    />
  </>
  )
}

export default ChangePin