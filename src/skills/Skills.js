import React from 'react';
import s from './Skills.module.scss'
import sContainer from './../common/styles/Container.module.css'
import Skill from "./skil/Skill";
import Title from "../common/components/title/Title";
import one from "../assets/icons/q.png";
import two from "../assets/icons/two.png";
import three from "../assets/icons/three.png";
import four from "../assets/icons/four.png";
import Fade from 'react-reveal/Fade';


const Skills = () => {

    const oneIcon = {
        backgroundImage: `url(${one})`,
    }

    const twoIcon = {
        backgroundImage: `url(${two})`,
    }

    const threeIcon = {
        backgroundImage: `url(${three})`,
    }

    const fourIcon = {
        backgroundImage: `url(${four})`,
    }

    return (
        <div id='Skills' className={`${s.skillsBlock} ${sContainer.padding}`}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Fade left>
                <Title title={"Skills"}/>
                <div className={s.skills}>
                    <Skill style={oneIcon} title={'Development'} description={"React, Redux, JavaScript, TypeScript, AXIOS etc"}/>
                    <Skill style={twoIcon} title={'Foundation'} description={"HTML5, CSS3, SASS, Team player, English - intermediate (in progress)"}/>
                    <Skill style={threeIcon} title={'Testing'} description={"Unit Tests, Storybook"}/>
                    <Skill style={fourIcon} title={'Design'} description={"Material UI,Ant Design"}/>
                </div>
                </Fade>
            </div>
        </div>
    );
};

export default Skills;

