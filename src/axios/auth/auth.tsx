import axiosInstance from '../axiosInstance';
import { toast } from 'react-toastify';

const LOGIN_ENDPOINT = '/Authorization/SignIn';

const LoginError = () => (
  <>
    <div>Wrong Credentials, use following:</div>
    <div>Email: test@bsgroup.eu</div>
    <div>Password: Test12!@</div>
  </>
);

export const SignIn = async (email: string, password: string) => {
  return axiosInstance
    .post(LOGIN_ENDPOINT, { username: email, password })
    .then((response: any) => {
      return response.data.AuthorizationToken.Token;
    })
    .catch(() => {
      toast.error(<LoginError />);
    });
};
