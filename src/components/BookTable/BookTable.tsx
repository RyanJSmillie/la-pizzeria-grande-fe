import React, { useState } from "react";
import Modal from "react-modal";
import DateTimePicker from "react-datetime-picker";
import "./BookTable.css";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

Modal.setAppElement(document.getElementById("root"));

const BookTable = () => {
  const [modalIsOpen, setModalIsOpen] = useState<Boolean>(false);
  const [value, onChange] = useState<Value>(new Date());
  const [name, setName] = useState<String>("");
  const [diet, setDiet] = useState<String>("");

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Book a Table</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        contentLabel="Example Modal"
      >
        <div>
          <h1 className="heading-primary modal-heading">Book a Table</h1>
        </div>
        <div className="grid-container-modal">
          <div className="grid-item text">
            <h3>
              Bookings aren’t always necessary at La Pizzeria Grande – we love a
              walk-up as much as the next bar. However, it is nice knowing that
              you’ve got a table waiting for you, ready to be filled with pizza
              the size of a small family car and loaded with the finest pints
              and frozen cocktails around. It sounds really nice, in fact. Book
              in below for some ‘za, a few drinks, or for any of our events at
              any Grande's. Easy as you like.
            </h3>
            <h3>
              Please select a date and time from the calendar, hit submit and a
              member of the team will get back to you to confirm your
              reservation!
            </h3>
          </div>
          <div className="grid-item calendar">
            <form>
              <div className="modal-form-field name">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className="modal-form-field diet">
                <label>Dietary Requirements</label>
                <input
                  type="text"
                  name="dietary requirements"
                  onChange={(e) => setDiet(e.target.value)}
                ></input>
              </div>
            </form>
            <DateTimePicker onChange={onChange} value={value} />
            <button className="submit-button">
              <a
                href={`mailto:sayHello@lapizzeriagrande.com?subject=Booking Enquiry&body=Hello, please could I book a table for ${value}. My name is ${name} and we have the following dietary requirements: ${diet}`}
              >
                Submit
              </a>
            </button>
          </div>
        </div>
        <div className="modal-button">
          <button onClick={closeModal}>close</button>
        </div>
      </Modal>
    </div>
  );
};

export default BookTable;
