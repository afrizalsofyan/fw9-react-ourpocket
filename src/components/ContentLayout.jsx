import React from 'react'
import { Row, Col } from 'react-bootstrap'

function ContentLayout({child}) {
    return (
        <Col sm={12} lg={9} className='d-flex flex-column gap-4'>
            <Row className='bg-white rounded-5 ms-lg-2 p-5 gx-0'>
                {child}
            </Row>
        </Col>
    )
}

export default ContentLayout