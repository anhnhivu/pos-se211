import React, { useState } from "react";
import PizzaLeft from "./Images/pizzaLeft.jpg";
import DateTimePicker from "react-datetime-picker";
import "./ReservePage.css";
import { useHistory } from "react-router";

function Reserve() {
  const history = useHistory();
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
        <form id="reserve-form">
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
          <label htmlFor="message">Note</label>
          <textarea
            rows="4"
            placeholder="How many people? Your requests to us?..."
            name="message"
            required
          ></textarea>
          <button
            type="submit"
            onClick={() => {
              history.push("/thankyou");
            }}
          >
            {" "}
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reserve;
