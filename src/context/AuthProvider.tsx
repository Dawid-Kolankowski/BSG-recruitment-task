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
  const [authLoading, setLoading] = useState(true);

  const setAuth = (token: string, refreshToken: string) => {
    setToken(token);
    setCookie(TOKEN_COOKIE, token);
    setCookie(REFRESH_TOKEN_COOKIE, refreshToken);
  };

  const refreshTokenOnLoad = async () => {
    const refreshTokenCookie = cookies[REFRESH_TOKEN_COOKIE];

    if (refreshTokenCookie) {
      const authorization = await refreshToken(refreshTokenCookie);
      setAuth(authorization?.Token, authorization?.RefreshToken);
    }

    setLoading(false);
  };

  useEffect(() => {
    refreshTokenOnLoad();
  }, []);

  return (
    <AuthContext.Provider value={{ token, setAuth, authLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
