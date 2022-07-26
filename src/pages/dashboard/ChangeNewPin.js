import React from 'react'
import { Link } from 'react-router-dom'
import { ProfileLayout } from '../../components/ContentLayout'
import { InputPin } from '../../components/InputField'

function ChangeNewPin() {
  return (
    <>
    <ProfileLayout
      headerText="Change PIN"
      subtitleText="Type your new 6 digits security PIN to use in OurPocket."
      child={
        <>
          <div className="d-flex flex-row pin-wrapper gap-2 gap-md-2 gap-lg-4 justify-content-center my-5">
              <InputPin />
              <InputPin />
              <InputPin />
              <InputPin />
              <InputPin />
              <InputPin />
            </div>
          <div className='d-grid px-5 mb-5 w-75 mx-auto'>
              <Link to="../../details" className="btn border-0 px-4 py-2 btn-prim-1">
                  <span>Confirm</span>
              </Link>
          </div>
        </>
      }
    />
  </>
  )
}

export default ChangeNewPin