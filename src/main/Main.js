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
                <h1>I am Dmitry Shavel</h1>
                <p>Frontend Developer</p>
            </div>
            <div style={myPhoto} className={s.photo}></div>
        </div>
        </div>
    );
};

export default Main;