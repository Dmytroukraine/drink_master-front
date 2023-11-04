import React from 'react';
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import css from './UserLogoPopup.module.css';
import edit from '../../images/edit_icon.svg';

const UserLogoPopup = ({ onClick, closeMenu }) => {
  const handleClickProfile = e => {
    e.stopPropagation();
    onClick();
    closeMenu();
  };

  return (
    <div className={css.userLogoPopup}>
      <button onClick={handleClickProfile} className={css.button}>
        <p className={css.text}>Edit Profile</p>
        <img src={edit} alt="Edit Icon" />
      </button>
      <LogoutBtn />
    </div>
  );
};

export default UserLogoPopup;
