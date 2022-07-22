import React from 'react'
import { FiArrowUp, FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function DashboardBalanceInfo() {
    return (
        <div className="d-flex flex-column justify-content-between">
            <div className="d-flex flex-column flex-sm-row justify-content-between bg-blue rounded-5 shadow-sm pb-4 pb-sm-0">
                <div className="d-flex flex-row justify-content-center">
                    <div className="d-flex flex-column gap-3 p-4 text-center text-sm-start">
                        <span className="text-white fw-light">Balance</span>
                        <span className="text-white fs-3 fw-bold">Rp120.000</span>
                        <span className="text-white fw-lighter">
                            +62 813-9387-7946
                        </span>
                    </div>
                </div>
                <div className="d-flex flex-row flex-sm-column justify-content-center gap-4 px-4">
                    <div className="wd-bx-3 color-white-20 border border-light rounded-3 text-center py-2">
                        <div className="">
                            <Link
                                to="#"
                                className="link-rm-line d-flex flex-column flex-sm-row justify-content-between px-3 align-items-center"
                            >
                                <FiArrowUp size={24} className="color-blue-light" />
                                <span className="text-white fw-bold">Transfer</span>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-bx-3 color-white-20 border border-light rounded-3 text-center py-2">
                        <Link
                            to=""
                            className="link-rm-line d-flex flex-column flex-sm-row justify-content-between px-3 align-items-center"
                        >
                            <FiPlus size={24} className="color-blue-light" />
                            <span className="text-white fw-bold">Top Up</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardBalanceInfo