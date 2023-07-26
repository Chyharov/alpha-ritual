import { Link } from 'react-router-dom';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import s from '../WreathsHeader/WreathsHeader.module.scss';
import Logo from '../Logo/Logo';

const WreathsHeader = () => {
  return (
    <header className={s.header}>
      <div className={`container ${s.header__container}`}>
              <Logo />
        <Link className={s.header__linkBack} to="/wreaths">
          <MdOutlineArrowBackIos />Назад
        </Link>
      </div>
    </header>
  );
};

export default WreathsHeader;
