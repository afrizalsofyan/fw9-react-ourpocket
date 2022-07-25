import React from 'react'
import { Card } from 'react-bootstrap'

export const CardHistoryDashboard = ({imgUrl, name, type, amount}) => {
  return (
      <div className="d-flex flex-column gap-3 gap-sm-0 flex-sm-row justify-content-between shadow-sm p-3">
          <div className="d-flex gap-3">
              <div>
                  <img
                      className="we-3"
                      src={imgUrl}
                      alt="img1"
                  />
              </div>
              <div className="d-flex flex-column justify-content-center">
                  <span className="fw-semibold">{name}</span>
                  <span className="fw-light bg-grey-light">
                      {type}
                  </span>
              </div>
          </div>
          <div>
              <span className="fw-bold fs-5 color-green">
                  {amount}
              </span>
          </div>
      </div>
  )
}

export const DetailCardProfile = ({ title, content, cardButton }) => {
  return (
    <>
      <div className="d-flex flex-row justify-content-between align-items-center shadow-sm rounded-4 px-4 py-3">
        <div className="d-flex flex-column gap-2">
          <span className="fnt-desc2">{title}</span>
          <span className="fw-bold fs-5">{content}</span>
        </div>
        {cardButton !== null ? cardButton : null}
      </div>
    </>
  )
}

function CardDetailList({ title, content }) {
  return (
    <>
      <Card className='border-0 shadow-sm'>
        <Card.Body>
          <div className="d-flex flex-column gap-2">
            <span className="fw-lighter">{title}</span>
            <span className="fw-bold">{content}</span>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default CardDetailList