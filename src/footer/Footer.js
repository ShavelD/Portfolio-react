import React from 'react';
import s from './Footer.module.scss'
import sContainer from './../common/styles/Container.module.css'
import Zoom from 'react-reveal/Zoom';
import link from "../assets/icons/link.svg";
import telegram from "../assets/icons/telegram.svg";
import github from "../assets/icons/github.svg";


const Footer = () => {

    const telega = {
        backgroundImage: `url(${telegram})`,
    }
    const linkedin = {
        backgroundImage: `url(${link})`,
    }
    const gitHub = {
        backgroundImage: `url(${github})`,
    }


    return (
        <div className={`${s.footer} ${s.padding}`}>
            <Zoom cascade>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <div className={s.socialIcons}>
                    <a href={"https://t.me/ConstAdd"}>
                       <div style={telega} className={s.socialIcon}></div>
                    </a>
                    <a href={"https://www.linkedin.com/in/frontend-dev-by/"}>
                       <div style={linkedin} className={s.socialIcon}></div>
                    </a>
                    <a href={"https://github.com/ShavelD"}>
                        <div style={gitHub} className={s.socialIcon}></div>
                    </a>
                </div>
                <span className={s.copyright}>© 2023 all rights reserved</span>
            </div>
            </Zoom>
        </div>
    );
};

export default Footer;


