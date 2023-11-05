import React from 'react';

import logo from '../../images/logo.svg';
import css from './Logo.module.css';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink to="/home" className={css.href}>
      <img className={css.logo} src={logo} alt="logo" />
      <p className={css.title}> Drink Master</p>
    </NavLink>
  );
};

export default Logo;
