import AuthNav from 'components/WelcomePage/AuthNav';
import AuthNavTitle from 'components/WelcomePage/AuthNavTitle';
import css from './WelcomePage.module.css';

const WelcomePage = () => {
  return (
    <section className={css.wrapper}>
      <div className={`${css.container} ${css.center}`}>
        <AuthNavTitle title="Welcome to the app!" />
        <AuthNav />
      </div>
    </section>
  );
};

export default WelcomePage;