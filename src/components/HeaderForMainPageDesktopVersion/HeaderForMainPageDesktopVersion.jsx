import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Logo from '../Logo/Logo';
import Theme from '../NavBar/Theme';
import s from './HeaderForMainPageDesktopVersion.module.scss';

const HeaderForMainPageDesktopVersion = props => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <header className={s.header}>
      <div className={'container ' + s.header__container}>
        <Logo />

        <ul className={s.menu__list}>
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.05 }}
            className={s.menu__list_item}
          >
            <Link
              onClick={() => props.isMobile && props.closeMobileMenu()}
              className={s.menu__list_link}
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Головна
            </Link>
          </motion.li>
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.1 }}
            className={s.menu__list_item}
          >
            <Link
              onClick={() => props.isMobile && props.closeMobileMenu()}
              className={s.menu__list_link}
              to="ritualgoods"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Ритуальні товари
            </Link>
          </motion.li>
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.2 }}
            className={s.menu__list_item}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <Link
              onClick={() => props.isMobile && props.closeMobileMenu()}
              className={s.menu__list_link}
              to="ritualtransport"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Ритуальний транспорт
            </Link>
          </motion.li>
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.3 }}
            className={s.menu__list_item}
          >
            <Link
              onClick={() => props.isMobile && props.closeMobileMenu()}
              className={s.menu__list_link}
              to="ritualservices"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Ритуальні послуги
            </Link>
          </motion.li>
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.4 }}
            className={s.menu__list_item}
          >
            <Link
              onClick={() => props.isMobile && props.closeMobileMenu()}
              className={s.menu__list_link}
              to="additionalservices"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Додаткові послуги
            </Link>
          </motion.li>

          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.4 }}
            className={s.menu__list_item}
          >
            <Link
              onClick={() => props.isMobile && props.closeMobileMenu()}
              className={s.menu__list_link}
              to="сontacts"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Контакти
            </Link>
          </motion.li>

          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.5 }}
            className={s.menu__list_item}
          >
            <a
              href="https://g.page/r/CZPKcPVX5fZBEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className={s.menu__list_link}
              onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              Відгуки
            </a>
          </motion.li>
        </ul>
        <Theme />
      </div>
    </header>
  );
};

export default HeaderForMainPageDesktopVersion;
