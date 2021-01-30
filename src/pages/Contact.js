import React from 'react';
import { Navbar, Footer, Wrapper, ContactForm } from '../components';

export default function Contact() {
  return (
    <Wrapper contact='Contact'>
      <Navbar contact='Contact' />
      <ContactForm />
      <Footer />
    </Wrapper>
  );
}
