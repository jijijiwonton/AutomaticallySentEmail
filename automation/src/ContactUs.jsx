import React, { useState } from 'react';

const ContactUs = () => {
  const [formState, setFormState] = useState({});

  const changeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form className="container">
        <input
          type="text"
          name="name"
          placeholder="Enter your name please."
          value=""
          onChange={changeHandler}
          className="border"
        ></input>
        <input
          type="email"
          name="email"
          placeholder="Enter your email please."
          value=""
          onChange={changeHandler}
          className="border"
        ></input>
        <input type="submit" value="Submit Email"></input>
      </form>
    </div>
  );
};

export default ContactUs;
