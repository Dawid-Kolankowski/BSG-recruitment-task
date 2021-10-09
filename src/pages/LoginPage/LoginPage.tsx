import { SyntheticEvent, useState } from 'react';
import Logo from '../../assets/images/bsg-logo.svg';
import Input from '../../components/Input/Input';
import useInput from '../../hooks/useInput';
import Button from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner';
import { SignIn } from '../../axios/auth/auth';
import { toast } from 'react-toastify';
import withAuth from '../../HOC/withAuth';
import { IAuthProvider } from '../../context/types';

const EMAIL_LABEL = 'Email';
const PASSWORD_LABEL = 'Password';
const INPUT_ERROR = 'Missing email or password';

const LoginPage = ({ setAuth, authLoading }: IAuthProvider) => {
  const email = useInput('test@bsgroup.eu');
  const password = useInput('Test12!@');

  const [isLoading, setIsLoading] = useState(false);

  const isEmailAndPassword = () => email.value && password.value;

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (!isEmailAndPassword()) {
      toast.error(INPUT_ERROR);
      return;
    }

    setIsLoading(true);

    const authorization = await SignIn(email.value, password.value);
    if (authorization?.Token) {
      setAuth(authorization.Token, authorization.RefreshToken);
      return;
    }

    setIsLoading(false);
  };

  const renderForm = (
    <form className="login__form" onSubmit={onSubmit}>
      <img src={Logo} alt="BSG logo" />
      <Input name={EMAIL_LABEL} label={EMAIL_LABEL} type="email" {...email} />
      <Input
        name={PASSWORD_LABEL}
        label={PASSWORD_LABEL}
        type="password"
        {...password}
      />
      <Button
        label="SIGN IN"
        style={{ alignSelf: 'flex-end', marginTop: '5px' }}
      />
    </form>
  );

  return (
    <div className="login">
      {isLoading || authLoading ? <Spinner /> : renderForm}
    </div>
  );
};

export default withAuth(LoginPage);
