import React, { useState } from "react";

import "./ContactForm.scss";

const ContactForm = () => {
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");

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
                <input
                  type="text"
                  name="subject"
                  onChange={(e) => setEmailSubject(e.target.value)}
                />
              </div>
            </div>

            <div className="form-field">
              <div>
                <label>Message</label>
                <textarea
                  name="message"
                  onChange={(e) => setEmailBody(e.target.value)}
                />
              </div>
            </div>
          </form>
        </>

        <button>
          <a
            href={`mailto:sayHello@lapizzeriagrande.com?subject=${emailSubject}&body=${emailBody}`}
          >
            Submit
          </a>
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
