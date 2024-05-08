import React from 'react';
import logo from './AP.svg';

function Header() {
  return (
    <div className='p-5 bg-primary flex justify-between'>
        <img src={logo} alt="Logo"/>
        <h1 className='text-white text-4xl'>Home</h1>
    </div>
  );
}

export default Header;
 