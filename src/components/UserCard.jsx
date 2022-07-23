import React from 'react'
import { Link } from 'react-router-dom'

export const UserCard = ({url, img_path, name, phone }) => {
    return (
        <Link to={url} className='link-rm-line text-black'>
            <div className="d-flex flex-column align-items-center flex-sm-row justify-content-between">
                <div className="d-flex flex-column flex-sm-row align-items-center gap-3">
                    <div>
                        <img className="we-3" src={img_path} alt="" />
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center align-items-md-start">
                        <span className="fw-semibold">{name}</span>
                        <span className="fw-light bg-grey-light">{phone}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export const UserCardHistoryDecreaseAmount = ({ img_path, alt, name, type_transaction, amount }) => {
    return (
        <div className="d-flex flex-column gap-3 gap-sm-0 flex-sm-row justify-content-between shadow-sm p-3">
            <div className="d-flex gap-3">
                <div>
                    <img className="we-3" src={img_path} alt={alt} />
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <span className="fw-semibold">{name}</span>
                    <span className="fw-light bg-grey-light">{type_transaction}</span>
                </div>
            </div>
            <div>
                <span className="fw-bold fs-5 color-red">{amount}</span>
            </div>
        </div>
    )
}

function UserCardHistoryIncreaseAmount({ img_path, alt, name, type_transaction, amount }) {
    return (
        <div className="d-flex flex-column gap-3 gap-sm-0 flex-sm-row justify-content-between shadow-sm p-3">
            <div className="d-flex gap-3">
                <div>
                    <img className="we-3" src={img_path} alt={alt} />
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <span className="fw-semibold">{name}</span>
                    <span className="fw-light bg-grey-light">{type_transaction}</span>
                </div>
            </div>
            <div>
                <span className="fw-bold fs-5 color-green">{amount}</span>
            </div>
        </div>
    )
}

export default UserCardHistoryIncreaseAmount