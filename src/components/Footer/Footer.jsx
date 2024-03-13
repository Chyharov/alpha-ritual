import { Link } from 'react-router-dom'
import ScrollToTopButton from 'components/ScrollToTopButton/ScrollToTopButton';
import Logo from '../Logo/Logo';
import ButtonGetConsultation from 'components/ButtonGetConsultation/ButtonGetConsultation';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={'container ' + s.footerContainer}>
          <Logo />
        
        
          <nav className={s.footerNavigation}>
            <ul className={s.footerNavList}>
              <Link to="/"><li style={{ padding: '4px 8px' }} className={s.footerNavListItem}>Головна</li></Link>
              <Link to="/about"><li style={{ padding: '4px 8px' }} className={s.footerNavListItem}>Про компанію</li></Link>
              <Link to="/ritualgoods"><li style={{ padding: '4px 8px' }} className={s.footerNavListItem}>Ритуальні товари</li></Link>
              <Link to="/ritualtransport"><li style={{ padding: '4px 8px' }} className={s.footerNavListItem}>Ритуальний транспорт</li></Link>
              <Link to="/ritualservices"><li style={{ padding: '4px 8px' }} className={s.footerNavListItem}>Ритуальні послуги</li></Link>
              <Link to="/additionalservices"><li style={{ padding: '4px 8px' }} className={s.footerNavListItem}>Додаткові послуги</li></Link>
            </ul>
          </nav>

          <address className={s.address}>
            <h2 className={s.addressTitle}>Адреса</h2>
            <ul className={s.addressList}>
              <a href="https://maps.app.goo.gl/JeAMk5y2yX5DnuHFA" target="_blank" rel="noopener noreferrer">
                <li style={{ padding: '8px 8px 4px' }} className={s.addressListItem}>
                  Київ, вул. Івана Федорова, 33
                </li>
              </a>
              <a href="https://maps.app.goo.gl/AwovKjfD7p53WbF56" target="_blank" rel="noopener noreferrer">
                <li style={{ padding: '4px 8px 8px', marginBottom: '8px' }} className={s.addressListItem}>
                  м.Київ, вул. Колоскова 9 (район Совського кладовища)
                </li>
              </a>
              <a href="tel:+380672459505">
                <li style={{ padding: '8px 8px 4px' }} className={s.addressPhoneListItemLast}>
                  +38 (067) 245 95 05
                </li>
              </a>
              <a href="tel:+380442322408">
                <li style={{ padding: '4px 8px' }} className={s.addressPhoneListItem}>
                  +38 (044) 232 24 08
                </li>
              </a>
              <a href="tel:+380995069473">
                <li style={{ padding: '4px 8px' }} className={s.addressPhoneListItem}>
                  +38 (099) 506 94 73
                </li>
              </a>
              <a href="tel:++380667858127">
                <li style={{ padding: '4px 8px', marginBottom: '8px' }} className={s.addressPhoneListItem}>
                  +38 (066) 785 81 27
                </li>
              </a>
            </ul>
          <p className={s.footerAllTimeDescription}>Щоденно | Цілодобово</p>
          </address>
        
          <ButtonGetConsultation />
              
          <div className={s.copyrightDescriptionContainer}>
            <p className={s.copyrightDescription}>АЛЬФА - Похоронний дім © 2023</p> <p className={s.copyrightDescription}>Всі права захищені.</p>
          </div>
      </div>
        
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
