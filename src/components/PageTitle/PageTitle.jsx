import css from './PageTitle.module.css';

export const PageTitle = ({ title }) => {
  return <h1 className={css.PageTitle}>{title}</h1>;
};
