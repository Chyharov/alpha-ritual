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
        
        
          <nav className={s.footerNavigation}>
            <ul className={s.footerNavList}>
              <Link className={s.footerNavListLink}><li style={{ padding: '4px 8px' }} className={s.footerNavListItem}>Головна</li></Link>
              <Link className={s.footerNavListLink}><li style={{ padding: '4px 8px' }} className={s.footerNavListItem}>Про компанію</li></Link>
              <Link className={s.footerNavListLink}><li style={{ padding: '4px 8px' }} className={s.footerNavListItem}>Ритуальні товари</li></Link>
              <Link className={s.footerNavListLink}><li style={{ padding: '4px 8px' }} className={s.footerNavListItem}>Ритуальні послуги</li></Link>
              <Link className={s.footerNavListLink}><li style={{ padding: '4px 8px' }} className={s.footerNavListItem}>Додаткові послуги</li></Link>
            </ul>
          </nav>
            <ButtonGetConsultation />
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
