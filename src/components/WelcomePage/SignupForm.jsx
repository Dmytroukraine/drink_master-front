// import { NavLink } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi';
// import { FiEyeOff, FiEye } from 'react-icons/fi';
// import css from './SignupForm.module.css';
// import {
//   useSigninMutation,
//   useSignupMutation,
// } from 'redux/authSlice/authSlice';
// import { notification } from 'components/Shared/notification';
// import { Loading } from 'components/Loader/Loader';
// import { useState } from 'react';
// import { signupSchema } from './signupSchema';
// import { yupResolver } from '@hookform/resolvers/yup';
// import DatePicker from 'components/Datepicker/StyledDatepicker';

// const SignupForm = () => {
//   const [dispatch, { isLoading }] = useSignupMutation();
//   const [login] = useSigninMutation();
//   const [hidePassword, setHidePassword] = useState(true);

//   const {
//     register,
//     formState: { errors, isValid, dirtyFields },
//     handleSubmit,
//     reset,
//   } = useForm({
//     mode: 'onChange',
//     defaultValues: { name: '', email: '', password: '' },
//     resolver: yupResolver(signupSchema),
//   });

//   const onSubmit = ({ name, email, password }) => {
//     dispatch({
//       name,
//       email: email.toLowerCase(),
//       password,
//       birthDate: '2002-02-03T00:00:00+00:00',
//     })
//       .unwrap()
//       .then(() => {
//         login({ email, password })
//           .unwrap()
//           .then(() => {
//             reset();
//           })
//           .catch(e => notification(e.data.message));
//       })
//       .catch(e => notification(e.data.message));
//   };

//   return (
//     <div className={css.div}>
//       <form
//         autoComplete="off"
//         className={css.form}
//         onSubmit={handleSubmit(onSubmit)}
//       >
//         <label className={css.label}>
//           <input
//             type="text"
//             placeholder="Name"
//             className={`${css.input} ${errors.name && css.invalid}
//              ${!errors.name && dirtyFields.name && css.valid}`}
//             {...register('name')}
//           />
//           <span className={css.circle}>
//             {errors.name?.message && (
//               <BiErrorCircle
//                 style={{
//                   width: '24px',
//                   height: '24px',
//                   color: 'red',
//                 }}
//               />
//             )}
//             {!errors.name && dirtyFields.name && (
//               <BiCheckCircle
//                 style={{
//                   width: '24px',
//                   height: '24px',
//                   color: '#3CBC81',
//                 }}
//               />
//             )}
//           </span>
//         </label>
//         {errors.name && <p className={css.error}>{errors.name.message}</p>}

//         <DatePicker />

//         <label className={css.label}>
//           <input
//             type="email"
//             className={`${css.input} ${errors.email && css.invalid}
//            ${!errors.email && dirtyFields.email && css.valid}`}
//             placeholder="Email"
//             {...register('email')}
//           />
//           <span className={css.circle}>
//             {errors.email?.message && (
//               <BiErrorCircle
//                 style={{
//                   width: '24px',
//                   height: '24px',
//                   color: 'red',
//                 }}
//               />
//             )}
//             {!errors.email && dirtyFields.email && (
//               <BiCheckCircle
//                 style={{
//                   width: '24px',
//                   height: '24px',
//                   color: '#3CBC81',
//                 }}
//               />
//             )}
//           </span>
//         </label>
//         {errors.email && <p className={css.error}>{errors.email.message}</p>}
//         {!errors.email && dirtyFields.email && (
//           <p style={{ color: '#3CBC81' }} className={css.error}>
//             This is an CORRECT email
//           </p>
//         )}
//         <label className={css.label}>
//           <input
//             type={hidePassword ? 'password' : 'text'}
//             className={`${css.input} ${errors.password && css.invalid}
//            ${!errors.password && dirtyFields.password && css.valid}`}
//             placeholder="Password"
//             {...register('password')}
//           />
//           <span
//             onClick={() => {
//               setHidePassword(!hidePassword);
//             }}
//             className={css.circle}
//           >
//             {hidePassword && dirtyFields.password && (
//               <FiEyeOff className={css.eyeBtn} />
//             )}
//             {!hidePassword && <FiEye className={css.eyeBtn} />}
//           </span>
//         </label>
//         {errors.password && (
//           <p className={css.error}>{errors.password.message}</p>
//         )}
//         {!errors.password && dirtyFields.password && (
//           <p style={{ color: '#3CBC81' }} className={css.error}>
//             This is an CORRECT password
//           </p>
//         )}
//         <button
//           className={css.btn}
//           type="submit"
//           disabled={!isValid || isLoading}
//         >
//           {isLoading ? <Loading size={50} /> : 'Sign Up'}
//         </button>
//       </form>
//       <NavLink className={css.nav} to="/signin">
//         Sign In
//       </NavLink>
//     </div>
//   );
// };

// export default SignupForm;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import 'react-datepicker/dist/react-datepicker.css';
import css from './SignupForm.module.css';
import {
  useSigninMutation,
  useSignupMutation,
} from 'redux/authSlice/authSlice';
import { notification } from 'components/Shared/notification';
import { Loading } from 'components/Loader/Loader';
import { yupResolver } from '@hookform/resolvers/yup';
import DatePicker from 'react-datepicker';
import { signupSchema } from './signupSchema';
import { CalendarGlobalStyles, StyledCalendarIcon } from './DatePicker.styled';

const SignupForm = () => {
  const currentDate = new Date();

  const [selectedDate, setSelectedDate] = useState(null);
  const [hidePassword, setHidePassword] = useState(true);
  const navigate = useNavigate();

  const [dispatch, { isLoading }] = useSignupMutation();
  const [login] = useSigninMutation();

  const {
    register,
    formState: { errors, isValid, dirtyFields },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: { name: '', email: '', password: '' },
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = ({ name, email, password }) => {
    dispatch({
      name,
      email: email.toLowerCase(),
      password,
      birthDate: '2002-02-03T00:00:00+00:00',
    })
      .unwrap()
      .then(() => {
        login({ email, password })
          .unwrap()
          .then(() => {
            navigate("/home", { replace: true });
            reset();
          })
          .catch(e => notification(e.data.message));
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
            type="text"
            placeholder="Name"
            className={`${css.input} ${errors.name && css.invalid}
             ${!errors.name && dirtyFields.name && css.valid}`}
            {...register('name')}
          />
          <span className={css.circle}>
            {errors.name?.message && (
              <BiErrorCircle
                style={{
                  width: '24px',
                  height: '24px',
                  color: 'red',
                }}
              />
            )}
            {!errors.name && dirtyFields.name && (
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
        {errors.name && <p className={css.error}>{errors.name.message}</p>}

        <label className={css.label}>
          <DatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            maxDate={currentDate}
            placeholderText="Date of birth"
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            style={{
              width: '24px',
              height: '24px',
            }}
          />
          <StyledCalendarIcon />
          <CalendarGlobalStyles />
        </label>

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
            This is a CORRECT email
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
            This is a CORRECT password
          </p>
        )}
        <button
          className={css.btn}
          type="submit"
          disabled={!isValid || isLoading}
        >
          {isLoading ? <Loading size={50} /> : 'Sign Up'}
        </button>
      </form>
      <NavLink className={css.nav} to="/signin">
        Sign In
      </NavLink>
    </div>
  );
};

export default SignupForm;
