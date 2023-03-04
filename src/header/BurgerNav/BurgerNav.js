import React, {useState} from 'react';
import s from './BurgerNav.module.scss'
import { Link, animateScroll as scroll } from "react-scroll";



const BurgerNav = () => {

    const [openMenu, setMenuOpen] = useState(false)

    let onButtonClick = () => {
        setMenuOpen(!openMenu)
    }

    return (
        <div className={s.burgerNav}>
            <div className={openMenu ? `${s.burgerNavItems} ${s.show}` : s.burgerNavItems}>
            {/*<a href="#">Main</a>*/}
            {/*<a href="#Skills">Skills</a>*/}
            {/*<a href="#Projects">Projects</a>*/}
            {/*<a href="#Contacts">Contacts</a>*/}
                <Link
                    // activeClass={s.active}
                    to="Main"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >Main</Link>
                <Link
                    activeClass={s.active}
                    to="Skills"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >Skills</Link>
                <Link
                    activeClass={s.active}
                    to="Projects"
                    spy={true}
                    smooth={true}
                    offset={-110}
                    duration={500}
                >Projects</Link>
            <Link
                activeClass={s.active}
                to="Contacts"
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}
            >Contacts</Link>
            </div>
            <div onClick={onButtonClick} className={s.burgerBtn}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default BurgerNav;