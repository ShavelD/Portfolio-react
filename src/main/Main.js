import React from 'react';
import s from './Main.module.css'
import sContainer from './../common/styles/Container.module.css'



const Main = () => {
    return (
        <div className={`${s.mainBlock} ${sContainer.padding}`}>
            <div className={sContainer.container}>
            <div className={s.text}>
                <span>Hi There</span>
                <h1>I am Dmitry Shavel</h1>
                <p>Frontend Developer</p>
            </div>
            <div className={s.photo}></div>
        </div>
        </div>
    );
};

export default Main;