import React from 'react';
import Logo from './Logo';
import UserLogo from './UserLogo';
import NavPages, { Menu } from './Navigation';
import css from './Header.module.css';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  return (
    <div className={css.header}>
      <Logo />
      <Menu isDesktop />
      <div className={css.group}>
        <ThemeSwitcher></ThemeSwitcher>
        <UserLogo userName={'Victoria'} />
        <NavPages />
      </div>
    </div>
  );
};

export default Header;
