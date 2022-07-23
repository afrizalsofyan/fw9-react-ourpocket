import React from 'react'
import { Card } from 'react-bootstrap'

function CardDetailList({title, content}) {
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