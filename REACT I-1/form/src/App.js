/* eslint-disable no-unused-vars */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import React from "react";
// import { useState } from "react";
// import { useState } from "react";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // console.log(firstName);
  // console.log(lastName);
  // function changefirstHandler (event) {
  //     setFirstName(event.target.value);

  // }
  //  function changelastHandler(event) {
  //  setLastName(event.target.value);
  //  }
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
  });
  console.log(formData.firstName, formData.lastName, formData.email);
  console.log(formData);
  function changeHandler(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className="App">
      <form>
        <input
          type="text"
          placeholder="Enter your first name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <input
          type="text"
          placeholder="Enter your last name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <input
          type="email"
          placeholder="Enter your email name"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />
        <br />
        <br />
        <textarea
          placeholder="enter your comments"
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          value={formData.isVisible}
          id="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am I visible ?</label>
        <fieldset>
          <input
            type="radio"
            name="mode"
            value="offline-Mode"
            checked={formData.mode === "offline-Mode"}
          />

          <label htmlfor="offline-mode">offline Mode</label>
          <input
            type="radio"
            name="mode"
            value="online-Mode"
            checked={formData.mode === "online-Mode"}
          />
          <label htmlfor="online-mode">online Mode</label>
        </fieldset>
        <select
          name="favCar"
          id="favCar"
          value={formData.favCar}
          onChange={changeHandler}
        >
          <option value="scorpio">scorpio</option>
          <option value="fortuner">fortuner</option>
          <option value="tesla">tesla</option>
          <option value="Honda">Honda</option>
        </select>
        {/* /Added some logic and data  */}
        <input />
      </form>
    </div>
  );
}

export default App;
