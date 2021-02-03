import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Wrapper } from './ContactFormElement';
import { Context } from '../../context/context';

export default function ContactForm() {
  const { darkMode } = useContext(Context);
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
    setErrorMessage((prevState) => ({ ...prevState, [name]: '' }));
  };

  const sendContactEmail = (contactInfo) => {
    axios
      .post('/contact', contactInfo)
      .then((data) => {
        setOnSuccess({ boolean: true, message: data.data.message });
        setState({ from: '', subject: '', text: '' });
      })
      .catch((err) => {
        setErrorMessage({
          from: err.response.data.from,
          subject: err.response.data.subject,
          text: err.response.data.text,
        });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendContactEmail(state);
  };

  const { from, text, subject } = state;
  return (
    <Wrapper darkmode={darkMode}>
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
            style={{
              borderColor: !errorMessage.from ? '#ccc' : 'red',
            }}
          />
          <span style={{ color: 'red' }}>{errorMessage['from']}</span>
        </div>
        <div>
          <input
            onChange={handleChange}
            name='subject'
            value={subject}
            type='text'
            label='Subject'
            placeholder='Subject'
            style={{
              borderColor: !errorMessage.subject ? '#ccc' : 'red',
            }}
          />
          <span style={{ color: 'red' }}>{errorMessage['subject']}</span>
        </div>
        <div>
          <textarea
            onChange={handleChange}
            value={text}
            name='text'
            type='text'
            label='Message'
            placeholder='Message'
            style={{
              borderColor: !errorMessage.text ? '#ccc' : 'red',
            }}
          />
          <span style={{ color: 'red' }}>{errorMessage['text']}</span>
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
