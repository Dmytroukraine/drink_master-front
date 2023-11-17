import s from './button.module.css';
import { ThreeDots } from 'react-loader-spinner';

// props:
// isDisabled: boolean
// type='button', 'submit
//handleClick: func
// spinner: true/false

// text: text - button
// buttonClass: default = button, submitButton, addButton
// width: '250px'
// padding: '10px 15px 10px 30px'
// fontSize: '14px'
// marginLeft = '0',
//Example:
// <Button text="Click here!" padding='0 0 0 0 0' width='250px' fontSize='25px'/>

export const Button = ({
  isDisabled,
  type = 'button',
  handleClick,
  spinner = false,
  text,
  buttonClass = 'button',
  width = '',
  padding = '',
  fontSize = '',
  marginLeft = '',
}) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={handleClick}
      style={{
        width: `${width}`,
        padding: `${padding}`,
        fontSize: `${fontSize}`,
        marginLeft: `${marginLeft}`,
      }}
      className={`${s[buttonClass]}`}
    >
      <p>{text}</p>

      <ThreeDots
        height="10"
        width="24"
        radius="3"
        color="gray"
        ariaLabel="three-dots-loading"
        wrapperStyle={{marginTop: 'auto'}}
        wrapperClassName=""
        visible={spinner}
      />
    </button>
  );
};
