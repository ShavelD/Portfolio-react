import React from 'react';
import s from './Main.module.scss'
import sContainer from './../common/styles/Container.module.css'
import myPhotoImage from "../assets/image/my-photo-miniS.jpg";


const Main = () => {


    const myPhoto = {
        backgroundImage: `url(${myPhotoImage})`,
    }


    return (
        <div className={`${s.mainBlock} ${sContainer.padding}`}>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <span>I am <span>Dmitry Shavel</span></span>
                    <h1 className={s.animation}>Frontend Developer</h1>
                </div>
                <div className={s.photo}>
                    <div style={myPhoto} className={s.image}></div>
                </div>
            </div>
        </div>
    );
};

export default Main;