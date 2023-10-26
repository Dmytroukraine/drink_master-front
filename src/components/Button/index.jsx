import s from './button.module.css';

// buttonClass: default = button, submitButton, addButton

export const Button = ({ text, buttonClass = 'button' }) => {
  return <button className={s[buttonClass]}>{text}</button>;
};
