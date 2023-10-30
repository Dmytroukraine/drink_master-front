import s from './button.module.css';

// props:
// text: text - button
// buttonClass: default = button, submitButton, addButton
// width: '250px'
// padding: '10px 15px 10px 30px'
// fontSize: '14px'

//Example:
// <Button text="Click here!" padding='0 0 0 0 0' width='250px' fontSize='25px'/>

export const Button = ({
  text,
  buttonClass = 'button',
  width = '',
  padding = '',
  fontSize= ''
}) => {
  return (
    <button
      style={{
        width: `${width}`,
        padding: `${padding}`,
        fontSize: `${fontSize}`
      }}
      className={s[buttonClass]}
    >
      {text}
    </button>
  );
};
