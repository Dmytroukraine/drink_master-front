import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './NavFooter.module.css'



export const NavFooter = () => {
  return (
    <ul className={css.navigation}>
      <li>
        <NavLink className={css.navText} to="/drinks">
          Drinks
        </NavLink>
      </li>
      <li>
        <NavLink className={css.navText} to="/add">
          Add drink
        </NavLink>
      </li>
      <li>
        <NavLink className={css.navText} to="/my">
          My Drinks
        </NavLink>
      </li>
      <li>
        <NavLink className={css.navText} to="/favorites">
        Favorites drinks
        </NavLink>
      </li>
    </ul>
  );
};