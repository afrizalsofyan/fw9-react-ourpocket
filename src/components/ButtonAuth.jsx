import React from 'react'
import { Button } from 'react-bootstrap'
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

export const ButtonSubmit = ({textButton}) => {
  return(
    <div className="d-grid">
      <Button className="btn btn-primary btn-lg fw-bold text-white btn-cstm color-blue-pm" type="submit">{textButton}</Button>
    </div>
  )
}

function ButtonAuth({ textButton, link, type }) {
  return (
    <div className="d-grid">
      <Link to={link} className="btn btn-primary btn-lg fw-bold text-white btn-cstm color-blue-pm" type={type}>{textButton}</Link>
    </div>
  )
}

export default ButtonAuth