import { Link } from 'react-scroll';
import ScrollToTopButton from 'components/ScrollToTopButton/ScrollToTopButton';
import Logo from '../Logo/Logo';
import ButtonGetConsultation from 'components/ButtonGetConsultation/ButtonGetConsultation';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className='container'>
        <div className={s.logoContainer}>
          <Logo />
        </div>
        
        <nav className={s.footerNavigation}>
          <ul className={s.footerNavList}>
            <Link className={s.footerNavListLink}><li className={s.footerNavListItem} style={{ marginBottom: '8px' }}>Головна</li></Link>
            <Link className={s.footerNavListLink}><li className={s.footerNavListItem} style={{ marginBottom: '8px' }}>Про компанію</li></Link>
            <Link className={s.footerNavListLink}><li className={s.footerNavListItem} style={{ marginBottom: '8px' }}>Ритуальні товари</li></Link>
            <Link className={s.footerNavListLink}><li className={s.footerNavListItem} style={{ marginBottom: '8px' }}>Ритуальні послуги</li></Link>
            <Link className={s.footerNavListLink}><li className={s.footerNavListItem}>Додаткові послуги</li></Link>
          </ul>
        </nav>
        <ButtonGetConsultation />
      </div>
       <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
