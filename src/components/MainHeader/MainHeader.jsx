import { Link } from 'react-router-dom';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import s from '../MainHeader/MainHeader.module.scss';
import Logo from '../Logo/Logo';

const MainHeader = () => {
  return (
    <header className={s.header}>
      <div className={`container ${s.header__container}`}>
        <Logo />
        <Link className={s.header__linkBack} to="/">
          <MdOutlineArrowBackIos />
        </Link>
      </div>
    </header>
  );
};

export default MainHeader;
