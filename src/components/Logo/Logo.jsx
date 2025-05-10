import { Link } from 'react-router-dom';
import logo from '../../images/logo/alpha-ritual-logo.svg';
import s from './Logo.module.scss';

const Logo = () => {
  return (
    <Link className={s.logo} to="/">
      <img
        className={s.logo__img}
        loading="lazy"
        src={logo}
        alt="header__logo"
      />
      <div className={s.logo__text}>
        <h2 className={s.logo__title}>АЛЬФА-РИТУАЛ</h2>
        <p className={s.logo__description}>похоронний дім</p>
        <p className={s.logo__description}>вул. Івана Федорова, 33</p>
      </div>
    </Link>
  );
};

export default Logo;
