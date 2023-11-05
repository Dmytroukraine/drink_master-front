import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import burger from '../../images/burger.svg';
import x from '../../images/x.svg';

const NavPages = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className={css.navigation}>
      <button onClick={handleToggle} className={css.btnNavigation}>
        <img src={isOpen ? x : burger} alt="Burger Navigation" />
      </button>
      {isOpen && (
        <div className={css.wrapper}>
          <div className={css.modal}>
            <Menu onClick={handleToggle} />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavPages;
export const Menu = ({ isDesktop = false, onClick = () => null }) => {
  return (
    <ul className={isDesktop ? css.menuDesktop : css.menuMobile}>
      <li>
        <NavLink onClick={onClick} className={css.btn} to="/home">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink onClick={onClick} className={css.btn} to="/drinks">
          Drinks
        </NavLink>
      </li>
      <li>
        <NavLink onClick={onClick} className={css.btn} to="/add">
          Add drink
        </NavLink>
      </li>
      <li>
        <NavLink onClick={onClick} className={css.btn} to="/my">
          My Drinks
        </NavLink>
      </li>
      <li>
        <NavLink onClick={onClick} className={css.btn} to="/favorites">
          Favorites
        </NavLink>
      </li>
    </ul>
  );
};
