import React, { useContext } from 'react';
import { Label } from './indexElement.js';
import { Context } from '../../context/context';

export default function ToggleDarkMode() {
  const { handleDarkMode, darkMode } = useContext(Context);
  console.log(darkMode);
  return (
    <>
      <Label className='switch'>
        <input
          onClick={handleDarkMode}
          type='checkbox'
          darkmode={darkMode ? 1 : 0}
        ></input>
        <span
          style={{ backgroundColor: darkMode ? '#2196f3' : '#ccc' }}
          className='slider round'
        ></span>
      </Label>
    </>
  );
}
