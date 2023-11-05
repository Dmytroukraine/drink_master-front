import React, { useState } from 'react';
import { emailIsValid } from 'helpers/emailIsValid';
import { notification } from 'components/Shared/notification';
import { useSubscribeMutation } from 'redux/authSlice/authSlice';
import css from './SubscribeForm.module.css';

function SubscribeForm() {
  const [subscribe, error] = useSubscribeMutation();

  const [email, setEmail] = useState('');

  const [emailError, setEmailError] = useState();
  const [isDisabled, setIsDisabled] = useState(true);

  const handleEmail = e => {
    const email = e.target.value;

    if (emailIsValid(email)) {
      setEmailError('');
      setIsDisabled(false);
      e.target.style.borderColor = 'green';
    } else {
      setEmailError('Email is not Valid');

      e.target.style.borderColor = 'red';
    }

    setEmail(email);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    subscribe(email)
      .unwrap()
      .then(payload => notification('kldjkldjgksjkgsjgj', 'success'))
      .catch(error =>
        notification(JSON.stringify(error.data.message), 'error')
      );
    document.getElementById('email').value = '';
    setIsDisabled(true);
    setEmail('');
  };

  return (
    <>
      <div className={css.subscribeForm}>
        <p className={css.subscribeFormText}>
          Subscribe up to our newsletter. Be in touch with latest news and
          special offers, etc.
        </p>
        <input
          className={css.subscribeFormImput}
          type="email"
          id="email"
          placeholder="Enter the email"
          onChange={handleEmail}
        />
        <button
          className={css.subscribeFormButton}
          type="submit"
          onClick={handleSubmit}
          disabled={isDisabled}
        >
          SUBSCRIBE
        </button>

        {emailError && <div>{emailError}</div>}
      </div>
    </>
  );
}

export default SubscribeForm;

//  const handleSubmit = evt => {
//    evt.preventDefault();
//    if (error.length === 0) {
//      const ls_emails = localStorage.getItem('emails');
//      const emails = ls_emails !== null ? JSON.parse(ls_emails) : [];

//      if (emails.length > 0 && emails.includes(email)) {
//        setError('Email address already exists !');
//        return;
//      }

//      if (emails.length > 0) {
//        localStorage.setItem('emails', JSON.stringify([...emails, email]));
//      } else {
//        localStorage.setItem('emails', JSON.stringify([email]));
//      }
//      setEmail('');
//      document.getElementById('email').value = '';
//      setIsDisabled(true);
//    }
//  };
