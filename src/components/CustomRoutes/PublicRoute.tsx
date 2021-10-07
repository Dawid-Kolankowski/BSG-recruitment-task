import { useContext, ComponentType } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface IPublicRouteProps extends RouteProps {
  component: ComponentType<any>;
  restricted: boolean;
}

const PublicRoute = ({
  component: RouteComponent,
  restricted,
  ...rest
}: IPublicRouteProps) => {
  const { token } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={() =>
        token && restricted ? <Redirect to="/" /> : <RouteComponent />
      }
    />
  );
};

export default PublicRoute;
