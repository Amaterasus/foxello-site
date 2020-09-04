import React from "react";
import { contactUsContent } from "../utilities/Strings";
import ContactUsForm from "../Components/ContactUsForm";
import ContactUsInfo from "../Components/ContactUsInfo";

const ContactUs = () => {
  return (
    <div>
      <h2>{contactUsContent.heading}</h2>
      <ContactUsForm />
      <ContactUsInfo />
    </div>
  );
};

export default ContactUs;
