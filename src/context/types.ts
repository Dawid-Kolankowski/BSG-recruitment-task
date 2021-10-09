export interface IAuthProvider {
  token: string;
  setAuth: (token: string, refreshToken: string) => void;
}
