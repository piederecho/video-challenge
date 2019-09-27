import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.png';

const Header = () => (
  <div className='header'>
    <img src={logo} alt='Logo' width='150' />
  </div>
);

export default Header;
