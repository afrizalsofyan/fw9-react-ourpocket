import React from 'react'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { InputPin } from './InputField'

function ModalTransferConfirmation({ show, onHide, id }) {
    return (
        <Modal
            show={show}
            onHide={onHide}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Header closeButton className="border-0 cstm-btn-modal">
                <Modal.Title className="modal-title fw-bold">
                    <span className="color-text-2">Enter PIN to Transfer</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="w-75">
                    <span className="fnt-desc color-text-2">
                        Enter your 6 digits PIN for confirmation to continue
                        transferring money.
                    </span>
                </div>
                <div className="pt-5 pb-4">
                    <div className="d-flex flex-row pin-wrapper gap-2 gap-md-2 gap-lg-4 justify-content-center">
                        <InputPin
                            name="pin1"
                            type="text"
                        />
                        <InputPin
                            name="pin2"
                            type="text"
                        />
                        <InputPin
                            name="pin3"
                            type="text"
                        />
                        <InputPin
                            name="pin4"
                            type="text"
                        />
                        <InputPin
                            name="pin5"
                            type="text"
                        />
                        <InputPin
                            name="pin6"
                            type="text"
                        />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="border-0 modal-footer-position">
                <div className="d-flex flex-column justify-content-center flex-sm-row gap-3">
                    <Link to={`/home/transfer/${id}/tranfer-confirmation/failed`} className="btn btn-danger py-2 px-4 border-2 btn-modal-footer">
                        Cancel
                    </Link>
                    <Link
                        to={`/home/transfer/${id}/tranfer-confirmation/success`}
                        className="btn px-4 py-2 btn-prim-1"
                    >
                        Continue
                    </Link>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalTransferConfirmation