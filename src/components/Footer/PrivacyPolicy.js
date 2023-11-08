// import React from 'react';
// import css from './PrivacyPolicy.module.css'

// const PrivacyPolicy = () => {
//   return (
//     <div className={css.privacyPolicy}>
//       <p className={css.copirigth}>©2023 Drink Master. All rights reserved.</p>
//       <div className={css.groupText}>
//       <p className={css.textPolicy}>Privacy Policy</p> 
//       <p className={css.textService}>Terms of Service</p>
//       </div>
//     </div>
    
//   );
// };

// export default PrivacyPolicy;

import React from 'react';
import css from './PrivacyPolicy.module.css';
import { Link } from 'react-router-dom'; 


const PrivacyPolicy = () => {
  return (
    <div className={css.privacyPolicy}>
      <p className={css.copirigth}>©2023 Drink Master. All rights reserved.</p>
      <div className={css.groupText}>
        <Link to="/privacy">Privacy Policy</Link> 
        <Link to="/service">Terms of Service</Link> 
      </div>
    </div>
  );
};

export default PrivacyPolicy;
