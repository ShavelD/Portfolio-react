import React from 'react';
import s from './Skills.module.css'
import sContainer from './../common/styles/Container.module.css'
import Skill from "./skil/Skill";


const Skills = () => {
    return (
        <div className={`${s.skillsBlock} ${sContainer.padding}`}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'Js'} description={"Lorem ipsum dolor sit dolor sit dolor sit dolor sit"}/>
                    <Skill title={'Css'} description={"It cup Lorem ipsum dolor sit dolor sit"}/>
                    <Skill title={'React'} description={"I am Lorem ipsum dolor sit dolor sit"}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;

