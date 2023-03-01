import React from 'react';
import s from './Footer.module.scss'
import sContainer from './../common/styles/Container.module.css'
import {footerIcon} from "./IconStyle";
import Zoom from 'react-reveal/Zoom';


const Footer = () => {
    return (
        <div className={`${s.footer} ${s.padding}`}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}><Zoom cascade>
                    Dmitry Shavel </Zoom>
                </h2>
                <div className={s.socialIcons}>
                    <div className={s.socialIcon}></div>
                    <div className={s.socialIcon}></div>
                    <div className={s.socialIcon}></div>
                    <div className={s.socialIcon}></div>
                </div>
                <span className={s.copyright}>2022 all rights reserved</span>
                {/*<div className={s.footer_text}>*/}
                {/*    <div style={footerIcon} className={s.icon}></div>*/}
                {/*    <div><p className={s.margin}>2022 all rights reserved</p></div>*/}
                {/*</div>*/}

            </div>
        </div>
    );
};

export default Footer;


