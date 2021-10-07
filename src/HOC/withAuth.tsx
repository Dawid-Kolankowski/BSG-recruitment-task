import { ComponentType, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

function withAuth<T>(Component: ComponentType<T>) {
  return (props: T) => {
    const { token, setToken } = useContext(AuthContext);

    return <Component {...props} token={token} setToken={setToken} />;
  };
}

export default withAuth;
