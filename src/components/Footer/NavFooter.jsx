import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './NavFooter.module.css'



export const NavFooter = ({ isDesktop = false }) => {
  return (
    <ul className={css.navigation}>
      <li>
        <NavLink className={css.btn} to="/home">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={css.btn} to="/drinks">
          Drinks
        </NavLink>
      </li>
      <li>
        <NavLink className={css.btn} to="/add">
          Add drink
        </NavLink>
      </li>
      <li>
        <NavLink className={css.btn} to="/my">
          My Drinks
        </NavLink>
      </li>
      <li>
        <NavLink className={css.btn} to="/favorites">
          Favorites
        </NavLink>
      </li>
    </ul>
  );
};