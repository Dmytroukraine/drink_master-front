import React, { useState } from 'react';
import { notification } from 'components/Shared/notification';
import { useSubscribeMutation } from 'redux/authSlice/authSlice';
import css from './SubscribeForm.module.css';
import { emailSchema } from './emailSchema';

function SubscribeForm() {
  const [subscribe] = useSubscribeMutation();

  const [email, setEmail] = useState('');

  const [errorInput, setErrorInput] = useState('');

  const [isDisabled, setIsDisabled] = useState(true);

  const handleEmail = e => {
    const email = e.target.value;
    setEmail(email);
    emailSchema
      .validate(email)
      .then(() => {
        setIsDisabled(false);
        setErrorInput('');
      })
      .catch(error => {
        setErrorInput(error.message);

        setIsDisabled(true);
      });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    subscribe(email)
      .unwrap()
      .then(payload =>
        notification('You have been subscribed  successfully', 'success')
      )
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
        <div style={{ color: 'red' }}>{errorInput}</div>
        <button
          className={css.subscribeFormButton}
          type="submit"
          onClick={handleSubmit}
          disabled={isDisabled}
        >
          SUBSCRIBE
        </button>
      </div>
    </>
  );
}
export default SubscribeForm;
