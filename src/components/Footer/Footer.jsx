import ScrollToTopButton from 'components/ScrollToTopButton/ScrollToTopButton';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
       <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
