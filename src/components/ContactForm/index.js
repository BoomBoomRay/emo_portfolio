import React from 'react';
import { Wrapper } from './ContactFormElement';

export default function ContactForm() {
  return (
    <Wrapper>
      <h1>Contact</h1>
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
