import React from 'react';
import s from './Navbar.module.scss'
import {Link, animateScroll as scroll} from "react-scroll";


const Navbar = () => {
    return (
        <div className={s.navbar}>
            <Link
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
                offset={-10}
                duration={500}
            >Skills</Link>
            <Link
                activeClass={s.active}
                to="Projects"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >Projects</Link>
            <Link
                activeClass={s.active}
                to="Contacts"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >Contacts</Link>
        </div>
    );
};

export default Navbar;