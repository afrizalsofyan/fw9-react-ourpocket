import React from 'react'
import { Row, Col } from 'react-bootstrap'

function ContentLayout({child}) {
    return (
        <Col sm={12} lg={9} className='d-flex flex-column justify-content-between gap-4'>
            <Row className='bg-white rounded-5 ms-lg-5 p-5'>
                {child}
            </Row>
        </Col>
    )
}

export default ContentLayout