import { useContext, FC } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { IAuthProvider } from '../context/types';

const withAuth =
  <P extends IAuthProvider>(
    Component: React.ComponentType<P>
  ): FC<Pick<P, Exclude<keyof P, keyof IAuthProvider>>> =>
  (props: Pick<P, Exclude<keyof P, keyof IAuthProvider>>) => {
    const { token, setAuth } = useContext(AuthContext);

    return <Component {...(props as P)} token={token} setAuth={setAuth} />;
  };

export default withAuth;
