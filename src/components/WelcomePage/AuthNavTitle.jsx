import css from './AuthNavTitle.module.css';

const AuthNavTitle = ({ title }) => {
  return <h2 className={css.title}>{title}</h2>;
};

export default AuthNavTitle;