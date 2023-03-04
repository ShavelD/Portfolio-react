import React from 'react';
import s from './Header.module.scss'
import Navbar from "./navbar/Navbar";
import BurgerNav from "./BurgerNav/BurgerNav";

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.navBlock}>
                <Navbar/>
                <BurgerNav/>
            </div>
        </div>
    );
};

export default Header;