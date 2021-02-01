import React, { useState } from 'react';
import axios from 'axios';
import { Wrapper } from './ContactFormElement';

export default function ContactForm() {
  const [state, setState] = useState({ from: '', subject: '', text: '' });
  const [onSuccess, setOnSuccess] = useState({ boolean: false, message: '' });
  const [errorMessage, setErrorMessage] = useState({
    from: '',
    subject: '',
    text: '',
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const sendContactEmail = (contactInfo) => {
    axios
      .post('http://localhost:3000/contact', contactInfo)
      .then((data) => {
        setOnSuccess({ boolean: true, message: data.data.message });
      })
      .catch((err) => {
        setErrorMessage({
          from: err.response.from,
          subject: err.response.subject,
          text: err.response.text,
        });
      });
  };

  console.log(errorMessage);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendContactEmail(state);
    setState({ from: '', subject: '', text: '' });
  };

  const { from, text, subject } = state;
  return (
    <Wrapper>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={handleChange}
            name='from'
            value={from}
            type='email'
            label='Email'
            placeholder='Email'
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            name='subject'
            value={subject}
            type='text'
            label='Subject'
            placeholder='Subject'
          />
        </div>
        <div>
          <textarea
            onChange={handleChange}
            value={text}
            name='text'
            type='text'
            label='Message'
            placeholder='Message'
          />
        </div>
        <div>
          {onSuccess.boolean ? (
            <h1 style={{ marginTop: '30px' }}>{onSuccess.message}</h1>
          ) : (
            <input onClick={handleSubmit} value='Send' type='button' />
          )}
        </div>
      </form>
    </Wrapper>
  );
}
