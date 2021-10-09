export interface IAuthProvider {
  token: string;
  setAuth: (token: string) => void;
}
