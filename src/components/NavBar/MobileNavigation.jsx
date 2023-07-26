import NavLinks from "./NavLinks";
import s from './NavBar.module.scss'
import {CgMenuRound} from 'react-icons/cg'
import {CgCloseO} from 'react-icons/cg'
import { useState } from 'react';

const MobileNavigation = () => {

    const [open, setOpen] = useState(false);
    const hamburgerIcon = <CgMenuRound className={s.hamburgerMenu} onClick={() => setOpen(!open)}/>
    const hamburgerCloseIcon = <CgCloseO className={s.hamburgerMenu} onClick={() => setOpen(!open)}/>
    const closeMobileMenu = () => setOpen(false);

    return ( 
        <nav className={s.mobileNavigation}>
            {open ? hamburgerCloseIcon : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} /> }
        </nav>
        
     );
}
 
export default MobileNavigation;