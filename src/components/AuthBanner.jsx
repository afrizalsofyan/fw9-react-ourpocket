import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ImagePhoneAuth from '../assets/images/img/auth-phone-img.png'

function AuthBanner() {
    return (
        <Col xs={12} md={7} className='bg-auth px-5 py-5 d-flex'>
            <Row>
                <Col xs={12} className='px-md-5'>
                    <span className='text-white fs-1 fw-bold'>OurPocket</span>
                </Col>
                <Col sm={12} className='d-flex w-100 flex-column gap-5 mt-4 justify-content-center'>
                    <div class="d-flex flex-row align-items-center px-md-5">
                        <img src={ImagePhoneAuth} alt="phoneimage" class="w-75 w-md-75 mx-auto" />
                    </div>
                    <div className='d-flex flex-column gap-2 px-md-5'>
                        <h2 className='text-white fs-2 fw-bold'>App that Covering Banking Needs.</h2>
                        <span className="text-white fs-6 fw-light"> Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage.
                        </span>
                    </div>
                </Col>
            </Row>
        </Col>
    )
}

export default AuthBanner