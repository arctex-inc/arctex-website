import "./contact.css";
import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import ContactInput from "./components/ContactInput";
import logo from "./assets/NavBar-Logo-Dark-NoBG.png";

const ContactPage = () => {
  // const [firstName, setFirstName] = useState("")
  const firstnameRef = useRef()

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    softwareUserSeats: "",
    message: "",
  });

  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      label: "First Name",

    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      label: "Last Name",

    },
    {
      id: 3,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email Address",

    },
    {
      id: 4,
      name: "phoneNumber",
      type: "text",
      placeholder: "Phone Number",
      label: "Phone Number",

    },
    {
      id: 5,
      name: "companyName",
      type: "text",
      placeholder: "Company Name",
      label: "Company Name(optional)",

    },
    {
      id: 6,
      name: "softwareUserSeats",
      type: "text",
      placeholder: "Software User Seats",
      label: "Software User Seats",
    },
  ];

  const messageArea = [
    {
      name: "message",
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <div className="wrapper">
      <div className="contact-form">
        <form onSubmit={handleSubmit} className="form-grid">
          <img src={logo} alt="Contact Form Logo" className="contact-logo" />
          {inputs.map(input => (
            <ContactInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
          ))}
          <label>Message</label>
          <textarea className="message-box" placeholder="Enter Message" rows={8}></textarea>
          <button className="submit-button">Submit</button>
          <Link to="/">
            <button className="home-button">Back to Home</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;