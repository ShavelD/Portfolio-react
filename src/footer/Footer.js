import React from 'react';
import s from './Footer.module.css'
import sContainer from './../common/styles/Container.module.css'
import {footerIcon} from "./IconStyle";

const Footer = () => {
    return (
        <div className={`${s.footerBlock} ${s.padding}`}>
            <div className={`${sContainer.container} ${s.container}`}>
                <h7>Dmitry Shavel</h7>
                <div className={s.displayBlock}>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                </div>
                <div className={s.footer_text}>
                    <div style={footerIcon} className={s.icon}></div>
                    <div><p className={s.margin}>2022 all rights reserved</p></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;