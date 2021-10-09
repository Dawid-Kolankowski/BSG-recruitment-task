import { useState, useEffect, createContext, ReactNode } from 'react';
import { IAuthProvider } from './types';
import { useCookies } from 'react-cookie';

const TOKEN_COOKIE = 'token';

export const AuthContext = createContext({} as IAuthProvider);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState('');
  const [cookies, setCookie] = useCookies([TOKEN_COOKIE]);

  useEffect(() => {
    const tokenCookie = cookies[TOKEN_COOKIE];

    if (tokenCookie) {
      setToken(tokenCookie);
    }
  }, []);

  const setAuth = (token: string) => {
    setToken(token);
    setCookie(TOKEN_COOKIE, token);
  };

  return (
    <AuthContext.Provider value={{ token, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
