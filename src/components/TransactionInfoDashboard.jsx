import React from 'react'
import { Col } from 'react-bootstrap'
import Img1 from '../assets/images/img/img3.png'
import Img2 from '../assets/images/icons/logo.png'
import Img3 from '../assets/images/img/img3.png'
import { Link } from 'react-router-dom'

function TransactionInfoDashboard() {
    return (
        <Col sm={12} md={6} className="ps-md-3">
            <div className="d-flex flex-column bg-white p-4 gap-4 rounded-5 h-100">
                <div className="d-flex flex-row justify-content-between">
                    <span className="fw-bold fs-6">Transaction History</span>
                    <Link className="link-rm-line" to="/home/history">
                        <span className="fw-light txt-color-blue">See all</span>
                    </Link>
                </div>
                {/* item max 3 */}
                <div className="d-flex flex-column gap-5">
                    <div className="d-flex flex-column gap-3 gap-sm-0 flex-sm-row justify-content-between shadow-sm p-3">
                        <div className="d-flex gap-3">
                            <div>
                                <img
                                    className="we-3"
                                    src={Img1}
                                    alt="img1"
                                />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <span className="fw-semibold">Samuel Suhi</span>
                                <span className="fw-light bg-grey-light">
                                    Transfer
                                </span>
                            </div>
                        </div>
                        <div>
                            <span className="fw-bold fs-5 color-green">
                                +Rp50.000
                            </span>
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-3 gap-sm-0 flex-sm-row justify-content-between shadow-sm p-3">
                        <div className="d-flex gap-3">
                            <div>
                                <img
                                    className="we-3"
                                    src={Img2}
                                    alt="img2"
                                />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <span className="fw-semibold">Netflix</span>
                                <span className="fw-light bg-grey-light">
                                    Subscription
                                </span>
                            </div>
                        </div>
                        <div>
                            <span className="fw-bold fs-5 color-red">
                                -Rp149.000
                            </span>
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-3 gap-sm-0 flex-sm-row justify-content-between shadow-sm p-3">
                        <div className="d-flex gap-3">
                            <div>
                                <img
                                    className="we-3"
                                    src={Img3}
                                    alt="img3"
                                />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <span className="fw-semibold">Samuel Suhi</span>
                                <span className="fw-light bg-grey-light">
                                    Transfer
                                </span>
                            </div>
                        </div>
                        <div>
                            <span className="fw-bold fs-5 color-green">
                                +Rp50.000
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default TransactionInfoDashboard