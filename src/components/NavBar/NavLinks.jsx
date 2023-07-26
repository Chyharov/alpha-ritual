import { Link } from 'react-scroll';
import { motion } from 'framer-motion'
import s from './NavBar.module.scss'

const NavLinks = (props) => {

    const animateFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }


    return (
        <div className='container'>
        <ul className={s.menu__list}>

            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.05}}
            className={s.menu__list_item}>
               <Link
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    className={s.menu__list_link}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    Головна
                </Link>
            </motion.li>

            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.10}}
            className={s.menu__list_item}>
                <Link
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    className={s.menu__list_link}
                    to="сontacts"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    Контакти
                </Link>
            </motion.li>

            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.20}}
            className={s.menu__list_item} 
            onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    className={s.menu__list_link}
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    Про компанію
                </Link>
            </motion.li>

            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.30}}
            className={s.menu__list_item}>
                <Link
                onClick={() => props.isMobile && props.closeMobileMenu()}
                    className={s.menu__list_link}
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    Ритуальні послуги
                </Link>
            </motion.li>
            <motion.li 
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.40}}
            className={s.menu__list_item}>
                <Link
                onClick={() => props.isMobile && props.closeMobileMenu()}
                    className={s.menu__list_link}
                    to="servicesList"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    Додаткові послуги
                </Link>
            </motion.li>
            

            </ul>
            </div>
     );
}
 
export default NavLinks;