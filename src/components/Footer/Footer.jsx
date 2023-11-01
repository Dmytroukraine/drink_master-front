import React from 'react';
import css from './Footer.module.css';
import PrivacyPolicy from './PrivacyPolicyAndTermsOfService';
import Logo from 'components/Header/Logo';
import { NavFooter } from './NavFooter';
import Followus from './FollowUs';
import SubscribeForm from './SubscribeForm';

const Footer = () => {
  return (
    <>
    <div className={css.footer}>
      <Logo/> 
      <Followus/>
      <NavFooter/>
      <SubscribeForm/>
    </div>
    <PrivacyPolicy />
    </>
  );
};

export default Footer;

