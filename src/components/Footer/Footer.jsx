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

          <h2>Адреса</h2>
          <address>
            <ul>
              <a className={s.footerNavListLink} href="https://maps.app.goo.gl/RmyTBg28Podhhuek6" target="_blank" rel="noopener noreferrer">
                <li className={s.footerNavListItem}>
                  Київ, вул. Івана Федорова, 33
                </li>
              </a>
              <a className={s.footerNavListLink} href="https://maps.app.goo.gl/AwovKjfD7p53WbF56" target="_blank" rel="noopener noreferrer">
                <li className={s.footerNavListItem}>
                  м.Київ, вул. Колоскова 9 (район Совського кладовища)
                </li>
              </a>
            </ul>
          </address>
            <ButtonGetConsultation />
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
