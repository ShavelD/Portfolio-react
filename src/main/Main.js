import React from 'react';
import s from './Main.module.scss'
import sContainer from './../common/styles/Container.module.css'
import myPhotoImage from "../assets/image/my-photo-miniS.jpg";
import Particle from "../assets/animation/Particle";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';




const Main = () => {

    const myPhoto = {
        backgroundImage: `url(${myPhotoImage})`,
    }


    return (
        <div className={`${s.positionAnimation} ${s.container} `}>
            <div className={s.containerInner}>
            <Particle/>
            <Fade top>
                <div className={s.text}>
                    <span>Hi There</span>
                    <span>I am <span>Dmitry Shavel</span></span>
                    <ReactTypingEffect
                        text="{ Frontend Developer }"
                        cursorClassName={s.cursorSize}/>

                </div>
                <div className={s.photo}>
                    <div style={myPhoto} className={s.image}></div>
                </div>
            </Fade>
            </div>

        </div>
    );
};

export default Main;