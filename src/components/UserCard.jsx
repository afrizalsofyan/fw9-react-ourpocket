import React from 'react'
import { Link } from 'react-router-dom'

export const UserCard = ({url, img_path, name, phone }) => {
    return (
        <Link to={url} class='link-rm-line text-black'>
            <div class="d-flex flex-row justify-content-between">
                <div class="d-flex gap-3">
                    <div>
                        <img class="we-3" src={img_path} alt="" />
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                        <span class="fw-semibold">{name}</span>
                        <span class="fw-light bg-grey-light">{phone}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export const UserCardHistoryDecreaseAmount = ({ img_path, alt, name, type_transaction, amount }) => {
    return (
        <div class="d-flex flex-column gap-3 gap-sm-0 flex-sm-row justify-content-between shadow-sm p-3">
            <div class="d-flex gap-3">
                <div>
                    <img class="we-3" src={img_path} alt={alt} />
                </div>
                <div class="d-flex flex-column justify-content-center">
                    <span class="fw-semibold">{name}</span>
                    <span class="fw-light bg-grey-light">{type_transaction}</span>
                </div>
            </div>
            <div>
                <span class="fw-bold fs-5 color-red">{amount}</span>
            </div>
        </div>
    )
}

function UserCardHistoryIncreaseAmount({ img_path, alt, name, type_transaction, amount }) {
    return (
        <div class="d-flex flex-column gap-3 gap-sm-0 flex-sm-row justify-content-between shadow-sm p-3">
            <div class="d-flex gap-3">
                <div>
                    <img class="we-3" src={img_path} alt={alt} />
                </div>
                <div class="d-flex flex-column justify-content-center">
                    <span class="fw-semibold">{name}</span>
                    <span class="fw-light bg-grey-light">{type_transaction}</span>
                </div>
            </div>
            <div>
                <span class="fw-bold fs-5 color-green">{amount}</span>
            </div>
        </div>
    )
}

export default UserCardHistoryIncreaseAmount