import { Link } from 'react-router-dom';
// import logo from '../../images/logo/omega-ritual-logo.svg';
import logo from '../../images/logo/alpha-logo.svg';
import logo2 from '../../images/logo/alpha-ritual.svg';
import s from './Logo.module.scss';

const Logo = () => {
  return (
    <Link className={s.logo} to="/">
      <img className={s.logo__img} loading="lazy" src={logo} alt="header__logo" />
      <img className={s.logo__img2} loading="lazy" src={logo2} alt="header__logo" />
  </Link>
    
        
  );
};

export default Logo;
