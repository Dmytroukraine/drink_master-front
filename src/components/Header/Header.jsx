import React from 'react';
import { getUserState } from 'redux/userSlice/userSelectors';
import { useSelector } from 'react-redux';
import Logo from './Logo';
import UserLogo from './UserLogo';
import NavPages, { Menu } from './Navigation';
import css from './Header.module.css';

const Header = () => {
  const { user } = useSelector(getUserState);

  return (
    <div className={css.header}>
      <Logo />
      <Menu isDesktop />
      <div className={css.group}>
        <UserLogo userName={user.name} avatarURL={user.avatarURL} />
        <NavPages />
      </div>
    </div>
  );
};

export default Header;