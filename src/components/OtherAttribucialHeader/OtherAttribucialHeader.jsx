import { Link } from 'react-router-dom';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import s from '../MainHeader/MainHeader.module.scss';
import Logo from '../Logo/Logo';

const OtherAttribucialHeader = () => {
  return (
    <header className={s.header}>
      <div className={`container ${s.header__container}`}>
        <Logo />
        <Link className={s.header__linkBack} to="/otherattributes">
          <MdOutlineArrowBackIos />Назад
        </Link>
      </div>
    </header>
  );
};

export default OtherAttribucialHeader;
