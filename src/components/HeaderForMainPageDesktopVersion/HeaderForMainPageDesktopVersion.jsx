import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../Logo/Logo';
import s from '../Header/Header.module.scss';

const HeaderForMainPageDesktopVersion = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <header className={s.header}>
      <div className={'container ' + s.header__container}>
        <Logo />

        <div className="container">
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
                to="main"
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
              transition={{ delay: 0.2 }}
              className={s.menu__list_item}
              onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <Link
                onClick={() => props.isMobile && props.closeMobileMenu()}
                className={s.menu__list_link}
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Про компанію
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
                to="services"
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
                to="servicesList"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Додаткові послуги
              </Link>
            </motion.li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderForMainPageDesktopVersion;
