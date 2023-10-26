import sass from './NoContent.module.css';

const NoContentSection = ({ children }) => {
  return <section className={sass.wrapper}>{children}</section>;
};

export default NoContentSection;