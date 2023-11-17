import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import css from './SignupForm.module.css';
import { useSigninMutation } from 'redux/authSlice/authSlice';
import { notification } from 'components/Shared/notification';
// import { Loading } from 'components/Loader/Loader';
import { useState } from 'react';
import { signinSchema } from './signinSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'components/Button';

const SigninForm = () => {
  const [dispatch, { isLoading }] = useSigninMutation();
  const [hidePassword, setHidePassword] = useState(true);

  const {
    register,
    formState: { errors, isValid, dirtyFields },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(signinSchema),
  });

  const onSubmit = ({ email, password }) => {
    dispatch({ email: email.toLowerCase(), password })
      .unwrap()
      .then(() => {
        reset();
      })
      .catch(e => notification(e.data.message));
  };

  return (
    <div className={css.div}>
      <form
        autoComplete="off"
        className={css.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className={css.label}>
          <input
            type="email"
            className={`${css.input} ${errors.email && css.invalid}
           ${!errors.email && dirtyFields.email && css.valid}`}
            placeholder="Email"
            {...register('email')}
          />
          <span className={css.circle}>
            {errors.email?.message && (
              <BiErrorCircle
                style={{
                  width: '24px',
                  height: '24px',
                  color: 'red',
                }}
              />
            )}
            {!errors.email && dirtyFields.email && (
              <BiCheckCircle
                style={{
                  width: '24px',
                  height: '24px',
                  color: '#3CBC81',
                }}
              />
            )}
          </span>
        </label>
        {errors.email && <p className={css.error}>{errors.email.message}</p>}
        {!errors.email && dirtyFields.email && (
          <p style={{ color: '#3CBC81' }} className={css.error}>
            This is an CORRECT email
          </p>
        )}
        <label className={css.label}>
          <input
            type={hidePassword ? 'password' : 'text'}
            className={`${css.input} ${errors.password && css.invalid}
           ${!errors.password && dirtyFields.password && css.valid}`}
            placeholder="Password"
            {...register('password')}
          />
          <span
            onClick={() => {
              setHidePassword(!hidePassword);
            }}
            className={css.circle}
          >
            {hidePassword && dirtyFields.password && (
              <FiEyeOff className={css.eyeBtn} />
            )}
            {!hidePassword && <FiEye className={css.eyeBtn} />}
          </span>
        </label>
        {errors.password && (
          <p className={css.error}>{errors.password.message}</p>
        )}
        {!errors.password && dirtyFields.password && (
          <p style={{ color: '#3CBC81' }} className={css.error}>
            This is an CORRECT password
          </p>
        )}
        {/* <button
          className={css.btn}
          type="submit"
          disabled={!isValid || isLoading}
        >
          {isLoading ? <Loading size={50} /> : 'Sign In'}
        </button> */}
        <Button
          isDisabled={!isValid || isLoading}
          spinner={isLoading}
          type="submit"
          buttonClass="submitButton"
          text="Sign in"
          width="100%"
        />
      </form>
      <NavLink className={css.nav} to="/signup">
        Registration
      </NavLink>
    </div>
  );
};

export default SigninForm;
