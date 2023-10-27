import AuthNavTitle from 'components/WelcomePage/AuthNavTitle';
import SigninForm from 'components/WelcomePage/SigninForm';
import css from './SignupPage.module.css';
import welcomeCss from './WelcomePage.module.css';

const SigninPage = () => {
  return (
    <section className={welcomeCss.wrapper}>
      <div className={css.container}>
        <AuthNavTitle title="Sign In" />
        <SigninForm />
      </div>
    </section>
  );
};

export default SigninPage;