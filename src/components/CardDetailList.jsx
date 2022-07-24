import React from 'react'
import { Card } from 'react-bootstrap'

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