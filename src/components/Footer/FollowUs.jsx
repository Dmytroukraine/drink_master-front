import React from 'react';
import css from './FollowUs.module.css'
import fecabook from '../../images/footer/facebook.svg';
import instagram from '../../images/footer/instagram.svg';
import youtube from '../../images/footer/youtube.svg';
const Followus = () => {
  return (
    <div className={css.followus}>
      <ul>
        <li>
          <a href="https://www.facebook.com/goITclub/" className={css.href} target="_blank" rel="noreferrer">
            <img className={css.logo} src={fecabook} alt="logo" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/goitclub/" className={css.href} target="_blank" rel="noreferrer">
            <img className={css.logo} src={instagram} alt="logo" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/c/GoIT" className={css.href} target="_blank" rel="noreferrer">
            <img className={css.logo} src={youtube} alt="logo" />
          </a>
        </li>
      </ul>
    </div>
    
  );
};

export default Followus;

