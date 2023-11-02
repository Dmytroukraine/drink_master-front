import React from 'react';

import logo from '../../images/logo.svg';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <a href="/home" className={css.href}>
      <img className={css.logo} src={logo} alt="logo" />
      <p className={css.title}> Drink Master</p>
    </a>
  );
};

export default Logo;
