// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './AP.svg';

function Header() {
  return (
    <div className='p-5 bg-primary flex justify-between backdrop-blur'>
      <img src={logo} alt="Logo"  className="md:h-12 h-8"/> 
      
      <Link to="/" className="text-white md:text-4xl self-center text-2xl">Home</Link>
    </div>
  );
}

export default Header;
