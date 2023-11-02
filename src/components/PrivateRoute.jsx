import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUserState } from 'redux/userSelectors';
import { Loading } from './Loader/Loader';
import { useCurrentUserQuery } from 'redux/authSlice';

const PrivateRoute = ({ component: Component, redirectTo = '/welcome' }) => {
  const {
    isLoggedIn,
    // isRefreshing
  } = useSelector(getUserState);
  // const shouldRedirect = !isLoggedIn && !isRefreshing;

  const user = useSelector(getUserState);
  const skip = !user.token && !user.isLoggedIn;

  const { data, isLoading, isError } = useCurrentUserQuery('', { skip });

  if (isLoggedIn && data) return <Component />;

  if (isError || (!isLoggedIn && !user.token))
    return <Navigate to={redirectTo} />;

  if (isLoading) return <Loading size={150} />;

  return <Loading size={150} />;
};

export default PrivateRoute;
