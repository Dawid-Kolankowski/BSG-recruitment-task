import { useState, useEffect, createContext, ReactNode } from 'react';
import { IAuthProvider } from './types';
import { useCookies } from 'react-cookie';
import { TOKEN_COOKIE } from '../utils/constants';

export const AuthContext = createContext({} as IAuthProvider);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState('');
  const [cookies] = useCookies([TOKEN_COOKIE]);

  useEffect(() => {
    const tokenCookie = cookies[TOKEN_COOKIE];
    console.log(tokenCookie);
    if (tokenCookie) {
      setToken(tokenCookie);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
