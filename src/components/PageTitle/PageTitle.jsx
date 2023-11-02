import css from './PageTitle.module.css';

export const PageTitle = ({ title }) => {
  return (
    <div className={css.TitleWrap}>
      <h1 className={css.PageTitle}>{title}</h1>;
    </div>
  );
};
