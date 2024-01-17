import Logo from '../Logo/Logo';
import s from '../Header/Header.module.scss';
import NavBar from 'components/NavBar/NavBar';


const Header = () => {
  return (
    <header className={s.header}>
      <div className={'container ' + s.header__container}>
        <Logo />
        
        <NavBar />
      </div>
      
    </header>
  );
};

export default Header;