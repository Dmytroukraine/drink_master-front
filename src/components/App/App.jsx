// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         // display: 'flex',
//         // justifyContent: 'center',
//         // alignItems: 'center',
//         // fontSize: 40,
//         // color: '#010101',
//       }}
//     >

//     {/* React homework template */}
//     </div>
//   );
// };

import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
// import WelcomePage from 'pages/WelcomePage';
// import SigninPage from 'pages/SigninPage';
// import SignupPage from 'pages/SignupPage';
import PrivateRoute from 'components/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useCurrentUserQuery } from 'redux/authSlice';
import { getUserState } from 'redux/userSelectors';
import { Loading } from 'components/Loader/Loader';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { HomePage } from 'pages/HomePage';
import FavoriteDrinksPage from 'pages/FavouriteDrinksPage';

const ErrorPage = lazy(() => import('pages/404Page'));

const App = () => {
  const user = useSelector(getUserState);
  const skip = !user.token && !user.isLoggedIn;

  const { isLoading } = useCurrentUserQuery('', { skip });

  if (isLoading) return <Loading size={100} />;

  return (
    <>
      <Routes>
        {/* <Route
          path="/welcome"
          element={<RestrictedRoute component={WelcomePage} />}
        /> */}
        {/* <Route
          path="/signup"
          element={<RestrictedRoute component={SignupPage} />}
        /> */}
        {/* <Route
          path="/signin"
          element={<RestrictedRoute component={SigninPage} />}
        /> */}

        <Route path="/" element={<PrivateRoute component={SharedLayout} />}/>
         
       
        <Route path="/" element={<RestrictedRoute component={SharedLayout} />}>

          <Route path="/home" element={<RestrictedRoute component={HomePage} />}/>

          <Route
            path="/favorites"
            element={<RestrictedRoute component={FavoriteDrinksPage} />}
          />


          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
