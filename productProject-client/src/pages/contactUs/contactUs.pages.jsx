import React, { useState } from "react";

import { addUserCommentAsync } from "../../components/servers/servers.components.js";

import "./contactUs.pages.css";

export const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [contactUsInput, setContactUs] = useState("");

  const handleUserComment = async () => {
    console.log(firstName, lastName, username, emailAddress, contactUsInput);
    await addUserCommentAsync({
      FirstName: firstName,
      LastName: lastName,
      Username: username,
      EmailAddress: emailAddress,
      ContactUsInput: contactUsInput,
    });
  };
  return (
    <>
      <form className="row g-3  myForm" novalidate>
        <div className="col-md-4">
          <label for="validationCustom01" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label for="validationCustom02" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            onChange={(e) => setLastName(e.target.value)}
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label for="validationCustomUsername" className="form-label">
            Username
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="text"
              className="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Contact Us
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(e) => setContactUs(e.target.value)}
          ></textarea>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" onClick={handleUserComment}>
            Submit form
          </button>
        </div>
      </form>
    </>
  );
};
