import React from 'react'
import {Link} from 'react-router-dom'

function ButtonAuth({textButton, link}) {
  return (
    <div className="d-grid">
      <Link to={link} className="btn btn-primary btn-lg fw-bold text-white btn-cstm color-blue-pm">{textButton}</Link>
    </div>
  )
}

export default ButtonAuth