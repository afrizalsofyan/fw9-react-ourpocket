import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';

export const InputPin = ({type, onChange, isInvalid, validation, name}) => {
  return (
    <div className='d-flex flex-column align-items-center box-pin-border p-2'>
      <InputGroup className='box-pin'>
        <Form.Control name={name} type={type} maxLength={1} className='border-0 text-center color-text-6' placeholder='' isInvalid={isInvalid !== null && isInvalid}/>
      </InputGroup>
      {validation !== null ? validation : null}
    </div>
  );
};

export const InputField2 = ({ icon, placeholder, type, suffixIcon, isInvalid, validation, name, value, onChange }) => {
  return (
    <InputGroup>
      <InputGroup.Text className={`bg-input-group rounded-0 ${isInvalid === true ? 'border-danger' : null}`}>
        {icon}
      </InputGroup.Text>
      <Form.Control className='cstm-border rounded-0 color-text-6' name={name} type={type} placeholder={placeholder} isInvalid={isInvalid !== null && isInvalid} value={value} onChange={onChange} />
      {suffixIcon != null ?
        <InputGroup.Text className={`bg-input-group rounded-0  ${isInvalid === true ? 'border-danger' : null}`}>
          {suffixIcon}
        </InputGroup.Text> : null
      }
      {validation !== null ? validation : null}
    </InputGroup>
  );
};

function InputField({ icon, placeholder, type, suffixIcon, isInvalid, validation, name, onChange }) {
  return (
    <InputGroup>
      <InputGroup.Text className={`bg-input-group rounded-0 ${isInvalid === true ? 'border-danger' : null}`}>
        {icon}
      </InputGroup.Text>
      <Form.Control className='cstm-border rounded-0 color-text-6' name={name} type={type} placeholder={placeholder} isInvalid={isInvalid !== null && isInvalid} onChange={onChange} />
      {suffixIcon != null ?
        <InputGroup.Text className={`bg-input-group rounded-0  ${isInvalid === true ? 'border-danger' : null}`}>
          {suffixIcon}
        </InputGroup.Text> : null
      }
      {validation !== null ? validation : null}
    </InputGroup>
  );
}

export default InputField;
