import { Dispatch, SetStateAction } from 'react';

export interface IAuthProvider {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}
