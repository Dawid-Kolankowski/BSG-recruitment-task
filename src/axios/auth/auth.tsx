import axiosInstance from '../axiosInstance';
import { toast } from 'react-toastify';

const LOGIN_ENDPOINT = '/Authorization/SignIn';
const REFRESH_ENDPOINT = '/Authorization/RefreshToken';

const DEVICE_NAME = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx';
const PLATFORM_CODE = 'WEB';
const LoginError = () => (
  <>
    <div>Wrong Credentials, use following:</div>
    <div>Email: test@bsgroup.eu</div>
    <div>Password: Test12!@</div>
  </>
);

export const SignIn = async (email: string, password: string) => {
  const body = {
    username: email,
    password,
    Device: {
      Name: DEVICE_NAME,
      PlatformCode: PLATFORM_CODE,
    },
  };

  return axiosInstance
    .post(LOGIN_ENDPOINT, body)
    .then((response: any) => {
      return response.data.AuthorizationToken;
    })
    .catch(() => {
      toast.error(<LoginError />);
    });
};

export const refreshToken = async (refreshToken: string) => {
  const body = {
    Token: refreshToken,
    Device: {
      Name: DEVICE_NAME,
      PlatformCode: PLATFORM_CODE,
    },
  };

  return axiosInstance
    .post(REFRESH_ENDPOINT, body)
    .then((response: any) => response.data.AuthorizationToken)
    .catch((error) => {
      console.error(error);
    });
};
