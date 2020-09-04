import React, { useState } from "react";
import { contactUsContent } from "../utilities/Strings";

const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e: any): void => {
    e.preventDefault();
    console.log(name, email, subject, message);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="contactUsForm">
      <form onSubmit={(e) => submitForm(e)}>
        <div className="input">
          <label htmlFor="name">{contactUsContent.nameFormLabel}</label>
          <input
            name="name"
            placeholder={contactUsContent.nameFormPlaceholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="email">{contactUsContent.emailFormLabel}</label>
          <input
            name="email"
            placeholder={contactUsContent.emailFormPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="subject">{contactUsContent.subjectFormLabel}</label>
          <input
            name="subject"
            placeholder={contactUsContent.subjectFormPlaceholder}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <textarea
          name="message"
          placeholder={contactUsContent.messageFormPlaceholder}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="contactFormBtn" type="submit">
          {contactUsContent.submitBtn}
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
