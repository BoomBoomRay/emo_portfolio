import React from 'react';
import styled from 'styled-components';

export default function ContactForm() {
  return (
    <Wrapper>
      <h1>Contact Us</h1>
      <form>
        <div>
          <input label='Name' placeholder='Name' />
        </div>
        <div>
          <input label='Email' placeholder='Email' />
        </div>
        <div>
          <input label='Subject' placeholder='Subject' />
        </div>
        <div>
          <textarea label='Message' placeholder='Message' />
        </div>
        <div>
          <input value='Send' type='button' />
        </div>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  padding: 20px;

  h1 {
    margin-bottom: 20px;
    text-align: center;
    font-family: var(--ff-secondary);
  }
  textarea {
    width: 100%;
    height: 170px;
    padding: 10px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    /* background-color: #f8f8f8; */
    font-size: 16px;
    resize: none;
    font-family: var(--ff-secondary);
  }
  form input {
    padding: 10px;
    width: 100%;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-family: var(--ff-secondary);
    outline-color: red;
  }
  form textarea {
    outline-color: red;
  }
  form div {
    padding-top: 15px;
  }
  form div:last-child {
    padding-top: 30px;
  }
  form div:last-child input {
    cursor: pointer;
  }
  @media (max-width: 500px) {
    form {
      border: 1px solid black;
      height: 500px;
      width: 100%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }
  @media (min-width: 500px) {
    display: flex;
    padding: 20px;
    /* justify-content: center; */
    /* max-width: 600px; */
    flex-direction: column;
    align-items: center;

    form {
      border: 1px solid black;
      height: 500px;
      width: 100%;
      max-width: 700px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }
`;