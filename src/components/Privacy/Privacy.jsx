import css  from './Privacy.module.css';

const Privacy = () => {
  return (
   
    <div className={css.PrivacyWrap}>
    <h1 className={css.MainTitle}>Privacy Policy</h1>

      <p className={css.Title}>  
      Your privacy is important to us.  This section outlines how we collect, use, process, and protect your personal data. This Privacy Policy applies to the use of our website, applications, and services, so please take a moment to read it.
      </p> 
      
      <p className={css.PrivacyText}>What personal data do we collect:
      <p className={css.SubTitle}> We may collect various types of personal data that you voluntarily provide when interacting with our website, registering an account or filling out forms. This may include your name, email address, phone number and more.
      
      </p></p>
      
      <p className={css.PrivacyText}>How we use your personal data:
      <p className={css.SubTitle}> We use the collected personal data to provide services, manage your account, provide you with information about our products and services, and to communicate with you regarding inquiries and updates.
     
      </p></p>
      
      <p className={css.PrivacyText}>Protection of personal data:
      <p className={css.SubTitle}> We take every effort to protect your information and use modern technologies to prevent unauthorized access, loss, or disclosure of your personal information.
      
      </p></p>
      
      <p className={css.PrivacyText}>Disclosure to third parties:
      <p className={css.SubTitle}> We do not disclose your personal data to third parties without your consent, except when required by law or to provide the services you requested.
      
      </p></p>

      <p className={css.PrivacyText}>Changes to the Privacy Policy:
      <p className={css.SubTitle}> We may periodically update this Privacy Policy. Please refer to this page to stay informed about any changes.
     
      </p></p>

      <p className={css.PrivacyText}>Contact us:
      <p className={css.SubTitle}> If you have any questions or concerns regarding this Privacy Policy or your information, please contact us using the contact details provided on our website.
      
      </p></p>

   </div> 
  )
}

export default Privacy;