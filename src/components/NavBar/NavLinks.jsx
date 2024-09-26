import { Link } from 'react-scroll';
import { motion } from 'framer-motion'
import s from './NavBar.module.scss'

const NavLinks = (props) => {

    const animateFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }


    return (

    <div className={'container ' + s.menuList__container}>
        <ul className={s.menu__list}>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.05}}
                className={s.menu__list_item}>
            <Link
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    className={s.menu__list_link}
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                            Головна
                </Link>
                    </motion.li>

                <Link
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    className={s.menu__list_link}
                    to="/about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.10}}
                        className={s.menu__list_item}>
                            Про компанію
                    </motion.li>
                </Link>

                <Link
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    className={s.menu__list_link}
                    to="/ritualgoods"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.20}}
                        className={s.menu__list_item} 
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                            Ритуальні товари
                    </motion.li>
                </Link>

                <Link
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    className={s.menu__list_link}
                    to="/ritualtransport"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.30}}
                        className={s.menu__list_item} 
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                            Ритуальний транспорт
                    </motion.li>
                </Link>

                <Link
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    className={s.menu__list_link}
                    to="/ritualservices"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.40}}
                        className={s.menu__list_item}>
                            Ритуальні послуги
                    </motion.li>
                </Link>

                <Link
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    className={s.menu__list_link}
                    to="/additionalservices"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.50}}
                        className={s.menu__list_item}>
                            Додаткові послуги
                    </motion.li>
                </Link>

        </ul>
    </div>
);
}
 
export default NavLinks;