import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.png';

const Header = () => (
  <div className='header'>
    <Link to="/">
      <img src={logo} alt='Logo' width='150' />
      </Link>
  </div>
);

export default Header;
