import React from 'react';
import s from './Header.module.scss'
import Navbar from "../navbar/Navbar";

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.navBlock}>
                <Navbar />
            </div>
        </div>
    );
};

export default Header;