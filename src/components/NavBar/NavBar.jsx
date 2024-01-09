import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import Theme from './Theme';
import s from './NavBar.module.scss'

const NavMenu = () => {

  return (
    <div className={s.navBar} onClick={e => e.stopPropagation()}>
      <nav className={s.nav}>
        <Theme />
        <MobileNavigation />
        <Navigation />
      </nav>
    </div>
  );
}

export default NavMenu;
