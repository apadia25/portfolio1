// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './AP.svg';

function Header() {
  return (
    <div className='p-5 bg-primary flex justify-between backdrop-blur'>
      <img src={logo} alt="Logo"  className="md:h-12 h-8"/> 

      <Link to="/" className="text-white md:text-4xl self-center text-2xl hidden md:block md:ml-auto">Home</Link>
      <Link to="/"><i class="ri-home-3-line text-white text-xl md:hidden"></i></Link>

    </div>
  );
}

export default Header;
