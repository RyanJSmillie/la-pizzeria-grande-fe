import React from "react";

import "./Contact.css";

import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="contact-img container">
      <div className="contact-content">
        <h1 className="heading-primary">Contact Us</h1>
        <h1 className="enquiry-text sub-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo sint
          exercitationem a dolore repellat, assumenda qui quibusdam laudantium
          commodi atque natus mollitia, quam tenetur labore, nesciunt ex?
          Sapiente, ipsum voluptate?
        </h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
