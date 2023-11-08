import React from 'react';
import css from './Footer.module.css';
import PrivacyPolicy from './PrivacyPolicy';
import Logo from 'components/Header/Logo';
import { NavFooter } from './NavFooter';
import Followus from './FollowUs';
import SubscribeForm from './SubscribeForm';

const Footer = () => {
  return (
    <>
    <section className={css.footerSection}>
    <div className={css.footer}>
      <div className={css.wraperMediaTablet}>
      <div className={css.wraperMedia}>
      <div>
      <Logo/> 
      <Followus/>
      </div>
      <NavFooter/>
      </div>
     
      <SubscribeForm/>
      </div>
      <PrivacyPolicy />
    </div>
    </section>
    </>
  );
};

export default Footer;

