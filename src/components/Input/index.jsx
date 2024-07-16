import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Input = ({ type, placholder, title, change, value }) => {
  return (
    <InputGroup size="sm" className="input-width">
      <Form.Control
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        placeholder={placholder}
        type={type}
        className="input-place p-2"
        value={value}
        onChange={change}
      />
      <InputGroup.Text
        className="bg-primary text-white pointer"
        id="inputGroup-sizing-sm"
        href="#"
      >
        {title}
      </InputGroup.Text>
    </InputGroup>
  );
};

export default Input;
