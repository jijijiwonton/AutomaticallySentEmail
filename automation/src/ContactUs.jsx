import React, { useState } from 'react';

const ContactUs = () => {
  const [formState, setFormState] = useState({});

  const changeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const config = {
      /**
       * Refer to the video from 05:00
       * https://www.youtube.com/watch?v=wUK40U6sPH0
       */
      SecureToken: '', // Needed for user name, password, server and port
      To: '',
      From: formState.email,
      Subject: '',
      Body: ``,
    };
    if (window.Email) {
      window.Email.send(config).then(() => alert('Email sent successfully!'));
    }
  };
  return (
    <div>
      <form className="container" onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name please."
          value={formState.name || ''}
          onChange={changeHandler}
          className="border"
        ></input>
        <input
          type="email"
          name="email"
          placeholder="Enter your email please."
          value={formState.email || ''}
          onChange={changeHandler}
          className="border"
        ></input>
        <input type="submit" value="Submit Email"></input>
      </form>
    </div>
  );
};

export default ContactUs;
