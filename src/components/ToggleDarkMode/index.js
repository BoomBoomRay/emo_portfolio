import React, { useContext } from 'react';
import { Label } from './indexElement.js';
import { Context } from '../../context/context';

export default function ToggleDarkMode({ isOpen }) {
  const { handleDarkMode, darkMode } = useContext(Context);

  return (
    <>
      <Label isOpen={isOpen} darkmode={darkMode} className='switch'>
        <input onClick={handleDarkMode} type='checkbox'></input>
        <span
          style={{ backgroundColor: darkMode ? '#2196f3' : '#ccc' }}
          className='slider round'
        ></span>
      </Label>
    </>
  );
}
