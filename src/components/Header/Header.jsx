import React from 'react';
import { getUserState } from 'redux/userSlice/userSelectors';
import { useSelector } from 'react-redux';
import Logo from './Logo';
import UserLogo from './UserLogo';
import NavPages, { Menu } from './Navigation';
import css from './Header.module.css';
import ThemeSwitcher from './ThemeSwitcher';



const Header = () => {
  const { user } = useSelector(getUserState);

  return (
    <div className={css.header}>
      <Logo />
      <Menu isDesktop />
      <div className={css.group}>

        <ThemeSwitcher></ThemeSwitcher>
       

        <UserLogo userName={user.name} />

        <NavPages />
      </div>
    </div>
  );
};

export default Header;
