import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
        </div>
    );
};

export default Navbar;