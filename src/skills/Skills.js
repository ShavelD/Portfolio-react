import React from 'react';
import s from './Skills.module.scss'
import sContainer from './../common/styles/Container.module.css'
import Skill from "./skil/Skill";
import Title from "../common/components/title/Title";


const Skills = () => {
    return (
        <div className={`${s.skillsBlock} ${sContainer.padding}`}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={s.skills}>
                    <Skill title={'Development'} description={"React, Redux, JavaScript, TypeScript, AXIOS etc"}/>
                    <Skill title={'Foundation'} description={"HTML5, CSS3, SASS, Team player, English - intermediate (in progress)"}/>
                    <Skill title={'Testing'} description={"Unit Tests, Storybook"}/>
                    <Skill title={'Design'} description={"Material UI,Ant Design"}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;

