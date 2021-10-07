import { useContext, ComponentType } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface IPrivateRouteProps extends RouteProps {
  component: ComponentType<any>;
}

const PrivateRoute = ({
  component: RouteComponent,
  ...rest
}: IPrivateRouteProps) => {
  const { token } = useContext(AuthContext);

  return (
    <Route
      exact
      {...rest}
      render={() => (token ? <RouteComponent /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
