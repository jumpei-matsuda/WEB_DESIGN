/* eslint-disable react/jsx-props-no-spreading */
import { useAuth } from 'contexts/auth';
import { Route, Redirect, RouteProps } from 'react-router';

const LoginRouter: React.FC<RouteProps> = ({ ...props }) => {
  const auth = useAuth();

  const isLogin = auth.user != null;
  console.log(isLogin);

  return (
    <>
      {!isLogin ? (
        <Redirect to='/login' />
      ) : (
        <Route {...props} />
      )}
    </>
  )
}
export default LoginRouter;
