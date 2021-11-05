import React, { useState } from "react";
import PizzaLeft from "./Images/pizzaLeft.jpg";
import DateTimePicker from "react-datetime-picker";
import "./ReservePage.css";

function Reserve() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="reserve">
      <div
        className="leftSide"
        style={{
          backgroundImage: `url(${PizzaLeft})`,
        }}
      ></div>
      <div className="rightSide">
        <h1>Book a Table</h1>
        <form id="reserve-form" action="/thankyou">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <div className="datetimebox">
            <DateTimePicker
              onChange={onChange}
              value={value}
              className="datetime"
            />
          </div>
          <label htmlFor="number">Number of people</label>
          <input
            type="number"
            name="number"
            required
            placeholder="How many people"
          ></input>
          <label htmlFor="message">Note</label>
          <textarea
            rows="4"
            placeholder="Your notes..."
            name="message"
          ></textarea>
          <button> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Reserve;
