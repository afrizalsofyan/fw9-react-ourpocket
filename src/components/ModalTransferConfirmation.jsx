import React from 'react'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ModalTransferConfirmation(props) {
    return (
        <Modal
            {...props}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Header closeButton className="border-0 cstm-btn-modal">
                <Modal.Title className="modal-title fw-bold">
                    Enter PIN to Transfer
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="w-75">
                    <span className="fnt-desc">
                        Enter your 6 digits PIN for confirmation to continue
                        transferring money.
                    </span>
                </div>
                <div className="pt-5 pb-4">
                    <div className="d-flex flex-row pin-wrapper gap-2 gap-sm-3 gap-md-2 gap-lg-4 justify-content-center">
                        <div className="d-flex align-items-center box-pin-border">
                            <input
                                type="text"
                                inputMode="numeric"
                                maxLength="1"
                                name=""
                                id=""
                                className="box-pin text-center"
                            />
                        </div>
                        <div className="d-flex align-items-center box-pin-border">
                            <input
                                type="text"
                                inputMode="numeric"
                                maxLength="1"
                                name=""
                                id=""
                                className="box-pin text-center"
                            />
                        </div>
                        <div className="d-flex align-items-center box-pin-border">
                            <input
                                type="text"
                                inputMode="numeric"
                                maxLength="1"
                                name=""
                                id=""
                                className="box-pin text-center"
                            />
                        </div>
                        <div className="d-flex align-items-center box-pin-border">
                            <input
                                type="text"
                                inputMode="numeric"
                                maxLength="1"
                                name=""
                                id=""
                                className="box-pin text-center"
                            />
                        </div>
                        <div className="d-flex align-items-center box-pin-border">
                            <input
                                type="text"
                                inputMode="numeric"
                                maxLength="1"
                                name=""
                                id=""
                                className="box-pin text-center"
                            />
                        </div>
                        <div className="d-flex align-items-center box-pin-border">
                            <input
                                type="text"
                                inputMode="numeric"
                                maxLength="1"
                                name=""
                                id=""
                                className="box-pin text-center"
                            />
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="border-0 modal-footer-position">
                <div className="d-flex flex-column justify-content-center flex-sm-row gap-3">
                    <Link to="" className="btn btn-danger py-2 px-4 border-2 btn-modal-footer">
                        Cancel
                    </Link>
                    <Link
                        to=""
                        className="btn btn-primary px-4 py-2 color-blue-pm btn-cstm btn-modal-footer"
                    >
                        Continue
                    </Link>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalTransferConfirmation