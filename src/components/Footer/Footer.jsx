import React from 'react';
import css from './Footer.module.css';
import PrivacyPolicy from './PrivacyPolicyAndTermsOfService';
import Logo from 'components/Header/Logo';
import { NavFooter } from './NavFooter';

const Footer = () => {
  return (
    <div className={css.footer}>
      <Logo/> 
      <NavFooter/>
      <PrivacyPolicy />
     
    </div>
    
  );
};

export default Footer;

