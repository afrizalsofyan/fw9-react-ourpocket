import React from 'react'
import {InputGroup,Form} from 'react-bootstrap'

export const InputPin = () => {
  return(
      <div className="d-flex flex-column align-items-center box-pin-border p-2">
        <InputGroup className='box-pin'>
          <Form.Control type={'text'} maxLength={1} className='border-0 text-center' placeholder=''/>
        </InputGroup>       
      </div>
  )
}

function InputField({icon, placeholder, type, suffixIcon}) {
  return (
    <InputGroup>
        <InputGroup.Text className='bg-input-group rounded-0'>
            {icon}
        </InputGroup.Text>
        <Form.Control className='cstm-border rounded-0' type={type} placeholder={placeholder}/>
        {suffixIcon != null ? 
            <InputGroup.Text className='bg-input-group rounded-0'>
                {suffixIcon}
            </InputGroup.Text> : null
        }
    </InputGroup>
  )
}

export default InputField