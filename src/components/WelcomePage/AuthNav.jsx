import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={css.div}>
      <p className={css.description}>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </p>
      <ul className={css.btnsList}>
        <li>
          <NavLink className={`${css.btn} ${css.btnWhite}`} to="/signup">
            Registration
          </NavLink>
        </li>
        <li>
          <NavLink className={css.btn} to="/signin">
            Sign In
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AuthNav;