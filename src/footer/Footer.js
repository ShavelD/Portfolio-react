import React from 'react';
import s from './Footer.module.css'
import sContainer from './../common/styles/Container.module.css'

const Footer = (props) => {
    return (
        <div className={`${s.footerBlock} ${sContainer.padding}`}>
            <div className={`${sContainer.container} ${s.container}`}>
                <h7>{props.title}</h7>
                <div className={s.displayBlock}></div>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default Footer;