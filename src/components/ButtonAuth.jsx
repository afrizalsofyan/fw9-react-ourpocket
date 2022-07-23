import React from 'react'
import { Link } from 'react-router-dom'

export const ButtonMenuProfile = ({menuName, suffixIcon, to}) => {
  return (
    <Link
      to={to}
      className="btn bg-btn-profile px-4 py-3"
    >
      <div className="d-flex flex-row justify-content-between">
        <span className="color-btn-text-profile fw-semibold fs-6">
          {menuName}
        </span>
        {suffixIcon !== null ? suffixIcon : null}
      </div>
    </Link>
  )
}

function ButtonAuth({ textButton, link }) {
  return (
    <div className="d-grid">
      <Link to={link} className="btn btn-primary btn-lg fw-bold text-white btn-cstm color-blue-pm">{textButton}</Link>
    </div>
  )
}

export default ButtonAuth