import Button from '../Button/Button';
import Logo from '../../assets/images/bsg-logo.svg';
import withAuth from '../../HOC/withAuth';
import { IAuthProvider } from '../../context/types';

const BUTTON_LABEL = 'SIGN OUT';

const Header = ({ setAuth }: IAuthProvider) => {
  return (
    <div className="header">
      <img src={Logo} alt="BSG logo" />
      <Button
        onClick={() => setAuth('', '')}
        label={BUTTON_LABEL}
        className="header__button"
      />
    </div>
  );
};

export default withAuth(Header);
