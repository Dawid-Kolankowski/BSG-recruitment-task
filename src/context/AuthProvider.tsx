import { useState, useEffect, createContext, ReactNode } from 'react';
import { IAuthProvider } from './types';
import { useCookies } from 'react-cookie';
import { refreshToken } from '../axios/auth/auth';
const TOKEN_COOKIE = 'token';
const REFRESH_TOKEN_COOKIE = 'RefreshToken';

export const AuthContext = createContext({} as IAuthProvider);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState('');
  const [cookies, setCookie] = useCookies([TOKEN_COOKIE, REFRESH_TOKEN_COOKIE]);

  const setAuth = (token: string, refreshToken: string) => {
    setToken(token);
    setCookie(TOKEN_COOKIE, token);
    setCookie(REFRESH_TOKEN_COOKIE, refreshToken);
  };

  const refreshTokenOnLoad = async () => {
    const refreshTokenCookie = cookies[REFRESH_TOKEN_COOKIE];

    const { Token, RefreshToken } = await refreshToken(refreshTokenCookie);
    setAuth(Token, RefreshToken);
  };

  useEffect(() => {
    refreshTokenOnLoad();
    const tokenCookie = cookies[REFRESH_TOKEN_COOKIE];

    if (tokenCookie) {
      setToken(tokenCookie);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
