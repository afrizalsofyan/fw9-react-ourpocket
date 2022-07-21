import React from 'react'
import {InputGroup,Form} from 'react-bootstrap'

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