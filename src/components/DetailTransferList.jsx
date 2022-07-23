import React from 'react'
import CardDetailList from './CardDetailList'

function DetailTransferList() {
    return (
        <div className="d-flex flex-column gap-3">
            <CardDetailList title={'Amount'} content={'Rp100.000'}/>
            <CardDetailList title={'Balance Left'} content={'Rp20.000'}/>
            <CardDetailList title={'Date & Time'} content={'May 11, 2020 - 12.20'}/>
            <CardDetailList title={'Notes'} content={'For buying some socks'}/>
        </div>
    )
}

export default DetailTransferList