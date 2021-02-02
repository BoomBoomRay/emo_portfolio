import React from 'react';
import './index.css';

export default function ToggleDarkMode({ toggledarkmode }) {
  return (
    <>
      <label className='switch'>
        <input onClick={toggledarkmode} type='checkbox'></input>
        <span className='slider round'></span>
      </label>
    </>
  );
}
