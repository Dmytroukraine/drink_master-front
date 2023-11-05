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
import WelcomePage from 'pages/WelcomePage';
import SigninPage from 'pages/SigninPage';
import SignupPage from 'pages/SignupPage';
import PrivateRoute from 'components/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useCurrentUserQuery } from 'redux/authSlice/authSlice';
import { getUserState } from 'redux/userSlice/userSelectors';
import { Loading } from 'components/Loader/Loader';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { HomePage } from 'pages/HomePage';
import FavoriteDrinksPage from 'pages/FavouriteDrinksPage';
import useLocalStorage from 'use-local-storage';
import DrinksPage from 'pages/DrinksPage';
import MyDrinksPage from 'pages/MyDrinksPage';
import AddDrinkPage from 'pages/AddDrinkPage';
import { RecipePage } from 'pages/RecipePage';
// import { DrinkPage } from 'pages/DrinkPage';

const ErrorPage = lazy(() => import('pages/404Page'));

const App = () => {
  const theme = useLocalStorage('theme' ? 'dark' : 'light');
  const user = useSelector(getUserState);
  const skip = !user.token && !user.isLoggedIn;

  const { isLoading } = useCurrentUserQuery('', { skip });

  if (isLoading) return <Loading size={100} />;

  return (
    <div data-theme={theme}>
      <>
        <Routes>
          <Route
            path="/welcome"
            element={<RestrictedRoute component={WelcomePage} />}
          />
          <Route
            path="/signup"
            element={<RestrictedRoute component={SignupPage} />}
          />
          <Route
            path="/signin"
            element={<RestrictedRoute component={SigninPage} />}
          />

          <Route path="/" element={<PrivateRoute component={SharedLayout} />}>
            <Route path="home" element={<HomePage />} />
            <Route path="drinks" element={<DrinksPage />} />
            <Route path="add" element={<AddDrinkPage />} />
            <Route path="drinks/:drinkId" element={<RecipePage />} />
            <Route path="favorites" element={<FavoriteDrinksPage />} />
            {/* <Route path="my/drinks/:drinkId" element={<DrinkPage />} /> */}
            <Route path="my" element={<MyDrinksPage />} />

            {/* <Route path="privacy" element={<Privacy />} /> */}
            {/* <Route path="servise" element={<Service />} /> */}

            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
        <ToastContainer />
      </>
    </div>
  );
};

export default App;
