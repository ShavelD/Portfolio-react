import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <a href="#">Main</a>
            <a href="#Skills">Skills</a>
            <a href="#Projects">Projects</a>
            <a href="#Contacts">Contacts</a>
        </div>
    );
};

export default Navbar;