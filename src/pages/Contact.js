import React from 'react';
import { Navbar, Footer, Wrapper, ContactForm } from '../components';

export default function Contact() {
  return (
    <Wrapper contact='Contact'>
      <ContactForm />
      <Footer />
    </Wrapper>
  );
}
