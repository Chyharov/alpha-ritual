import { useState } from 'react';
import NavLinks from "./NavLinks";
import s from './NavBar.module.scss'
import DarkMode from '../../images/navBar/darkMode.svg'
import LightMode from '../../images/navBar/lightMode.svg'

const Theme = () => {

    const [open, setOpen] = useState(false);
    const hamburgerIcon = (
        <img
            src={DarkMode}
            alt="Темна тема"
            aria-label="Темна тема"
            className={s.themeMenu}
            onClick={() => setOpen(!open)}
        />
    );

    const hamburgerCloseIcon = (
        <img
            src={LightMode}
            alt="Світла тема"
            aria-label="Світла тема"
            className={s.themeMenu}
            onClick={() => setOpen(!open)}
        />
    );

    const closeMobileMenu = () => setOpen(false);

    return ( 
        <>
            {open ? hamburgerCloseIcon : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} /> }
        </>
        
     );
}
 
export default Theme;