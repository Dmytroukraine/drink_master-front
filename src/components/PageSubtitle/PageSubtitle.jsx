import css from './PageSubtitle.module.css';

const PageSubtitle = ({ subtitle }) => {
  return <h2 className={css.PageSubtitle}>{subtitle}</h2>;
};

export default PageSubtitle;
