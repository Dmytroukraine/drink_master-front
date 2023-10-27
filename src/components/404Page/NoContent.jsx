import css from './NoContent.module.css';

const NoContentSection = ({ children }) => {
  return <section className={css.wrapper}>{children}</section>;
};

export default NoContentSection;