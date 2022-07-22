import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {FiMail, FiLock, FiEyeOff, FiUser} from 'react-icons/fi'
import InputField from '../../components/InputField'
import AuthBanner from '../../components/AuthBanner'
import TitleAuthForm from '../../components/TitleAuthForm'
import ButtonAuth from '../../components/ButtonAuth'
import {Link} from 'react-router-dom'

function CreatePin() {
  return (
    <Row className='gx-0'>
        <AuthBanner/>
        <Col xs={12} md={5} className='px-5 py-5 d-flex flex-column justify-content-center bg-white gap-5'>
            <div className="d-flex flex-column gap-5">
                <TitleAuthForm title={'Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users'} subtitle={'Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!'}/>
                <div class="d-flex flex-row pin-wrapper gap-2 gap-sm-3 gap-md-2 gap-lg-4 justify-content-center">
                <div class="d-flex align-items-center box-pin-border">
                    <input type="text" inputmode="numeric" oninput="this.value = this.value.replace(/\D+/g, '')" maxlength="1" name="" id="" class="box-pin text-center"/>
                </div>
                <div class="d-flex align-items-center box-pin-border">
                    <input type="text" inputmode="numeric" oninput="this.value = this.value.replace(/\D+/g, '')" maxlength="1" name="" id="" class="box-pin text-center"/>
                </div>
                <div class="d-flex align-items-center box-pin-border">
                    <input type="text" inputmode="numeric" oninput="this.value = this.value.replace(/\D+/g, '')" maxlength="1" name="" id="" class="box-pin text-center"/>
                </div>
                <div class="d-flex align-items-center box-pin-border">
                    <input type="text" inputmode="numeric" oninput="this.value = this.value.replace(/\D+/g, '')" maxlength="1" name="" id="" class="box-pin text-center"/>
                </div>
                <div class="d-flex align-items-center box-pin-border">
                    <input type="text" inputmode="numeric" oninput="this.value = this.value.replace(/\D+/g, '')" maxlength="1" name="" id="" class="box-pin text-center"/>
                </div>
                <div class="d-flex align-items-center box-pin-border">
                    <input type="text" inputmode="numeric" oninput="this.value = this.value.replace(/\D+/g, '')" maxlength="1" name="" id="" class="box-pin text-center"/>
                </div>
            </div>
            </div>
            <ButtonAuth link={'/auth/createPinSuccess'} textButton={'Confirm'} />
        </Col>
    </Row>
  )
}

export default CreatePin