import React from "react";

import "./Contact.scss";

import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="contact-img container">
      <div className="contact-content">
        <h1 className="heading-primary">Contact Us</h1>
        <h1 className="enquiry-text sub-text">
          For enquiries about large bookings, please use our bookings page. For
          site related enquiries, including front of house enquiries – such as
          lost property or any other general queries, please use the contact form below. For media enquiries,
          please drop us a line on Instagram where a member of the team will
          pick up your enquiry.
        </h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
