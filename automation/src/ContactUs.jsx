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
      SecureToken: '', // Encapsulates about user name, password, server and port
      To: '',
      From: formState.email,
      Subject: ``, // If you want to include your email name, use it ${formState.name} and the rest of email subjects
      Body: ``,
    };
    if (window.Email) {
      window.Email.send(config).then(() => alert('Email sent successfully!'));
    }
  };

  const resetHandler = (e) => {
    e.target.value = '';
    setFormState(e.target.value);
  };

  return (
    <div>
      <form
        className="container"
        onSubmit={submitHandler}
        onReset={resetHandler}
      >
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
        <div className="btnContainer">
          <input type="submit" value="Submit Email" className="btn" />
          <input type="reset" value="Rest" className="btn" />
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
