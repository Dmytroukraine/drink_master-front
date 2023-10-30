import React from 'react';
import css from './PrivacyPolicy.mpdule.css'

const PrivacyPolicy = () => {
  return (
    <div className={css.privacyPolicy}>
      <p className={css.copirigth}>©2023 Drink Master. All rights reserved.</p>
      <p className={css.textPolicy}>Privacy Policy</p> 
      <p className={css.textService}>Terms of Service</p>
    </div>
    
  );
};

export default PrivacyPolicy;

