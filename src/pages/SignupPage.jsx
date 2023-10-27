import AuthNavTitle from 'components/WelcomePage/AuthNavTitle';
import SignupForm from 'components/WelcomePage/SignupForm';
import css from './SignupPage.module.css';
import welcomeCss from './WelcomePage.module.css';

const SignupPage = () => {
  return (
    <section className={welcomeCss.wrapper}>
      <div className={css.container}>
        <AuthNavTitle title="Registration" />
        <SignupForm />
      </div>
    </section>
  );
};

export default SignupPage;