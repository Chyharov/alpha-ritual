import { Link } from 'react-router-dom';
import logo from '../../images/logo/omega-ritual-logo.svg';
import s from './Logo.module.scss';

const Logo = () => {
  return (
    <Link className={s.logo} to="/">
      <img className={s.logo__img} loading="lazy" src={logo} alt="header__logo" />
  </Link>
    
        
  );
};

export default Logo;
