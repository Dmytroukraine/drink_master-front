import s from './button.module.css';

// props:
// text: text - button
// buttonClass: default = button, submitButton, addButton
// width: '250px'
// padding: '10px 15px 10px 30px'
// fontSize: '14px'
// marginLeft = '0',

//Example:
// <Button text="Click here!" padding='0 0 0 0 0' width='250px' fontSize='25px'/>

export const Button = ({
  text,
  buttonClass = 'button',
  width = '',
  padding = '',
  fontSize = '',
  marginLeft = '',
}) => {
  return (
    <button
      style={{
        width: `${width}`,
        padding: `${padding}`,
        fontSize: `${fontSize}`,
        marginLeft: `${marginLeft}`
      }}
      className={s[buttonClass]}
    >
      {text}
    </button>
  );
};
