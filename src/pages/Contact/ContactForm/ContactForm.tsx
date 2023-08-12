import React from "react";

import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div>
      <div className="form">
        <>
          <form>
            <div className="form-field name-email">
              <div>
                <label>Name</label>
                <input type="text" name="name" />
              </div>

              <div>
                <label>Email</label>
                <input type="email" name="email" />
              </div>
            </div>

            <div className="form-field">
              <div>
                <label>Subject</label>
                <input type="text" name="subject" />
              </div>
            </div>

            <div className="form-field">
              <div>
                <label>Message</label>
                <textarea name="message" />
              </div>
            </div>
          </form>
        </>

        <button>Submit</button>
      </div>
    </div>
  );
};

export default ContactForm;
