import React from "react";
import "../../src/contact.css";

const ContactInput = (props) => {
  const { label, onChange, id, ...inputProps } = props;

  return (
    <div className="contactInput">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} />
    </div>
  )
}

export default ContactInput;
