import { useLogoutMutation } from 'redux/authSlice/authSlice';
import { redirect } from 'react-router-dom';
import css from './LogoutBtn.module.css';

const LogoutBtn = ({ isDisabled = false }) => {
  const [dispatch] = useLogoutMutation();

  const logout = () => {
    dispatch()
      .unwrap()
      .then(() => redirect('/welcome'));
  };

  return (
    <button disabled={isDisabled} onClick={logout} className={css.btnLogout}>
      Logout
    </button>
  );
};

export default LogoutBtn;