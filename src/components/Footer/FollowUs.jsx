import React from 'react';
import css from './FollowUs.module.css'
import fecabook from '../../images/footer/facebook.svg';
import instagram from '../../images/footer/instagram.svg';
import youtube from '../../images/footer/youtube.svg';
const Followus = () => {
  return (

      <ul className={css.followus}>
        <li className={css.href}>
          <a href="https://www.facebook.com/goITclub/"  target="_blank" rel="noreferrer">
            <img className={css.logo} src={fecabook} alt="logo" />
          </a>
        </li>
        <li className={css.href}>
          <a href="https://www.instagram.com/goitclub/"  target="_blank" rel="noreferrer">
            <img className={css.logo} src={instagram} alt="logo" />
          </a>
        </li>
        <li className={css.href}>
          <a href="https://www.youtube.com/c/GoIT"  target="_blank" rel="noreferrer">
            <img className={css.logo} src={youtube} alt="logo" />
          </a>
        </li>
      </ul>
    
    
  );
};

export default Followus;

