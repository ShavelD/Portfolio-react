import React from 'react';
import s from './Skills.module.scss'
import sContainer from '../common/styles/Container.module.scss'
import Skill from "./skil/Skill";
import Title from "../common/components/title/Title";
import react from "../assets/icons/react-native.svg";
import bricks from "../assets/icons/bricks.svg";
import checklist from "../assets/icons/checklist.svg";
import design from "../assets/icons/design.svg";
import Fade from 'react-reveal/Fade';


const Skills = () => {

    const reactIcon = {
        backgroundImage: `url(${react})`,
    }

    const bricksIcon = {
        backgroundImage: `url(${bricks})`,
    }

    const checklistIcon = {
        backgroundImage: `url(${checklist})`,
    }

    const designIcon = {
        backgroundImage: `url(${design})`,
    }

    return (
        <div id='Skills' className={`${s.skillsBlock} ${sContainer.padding}`}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Fade top>
                    <Title title={"Skills"}/>
                </Fade>
                <Fade bottom>
                    <div className={s.skills}>
                        <Skill style={reactIcon} title={'Development'}
                               description={"React,  Redux/Toolkit,  TypeScript,  Rest api,  Axios etc"}/>
                        <Skill style={bricksIcon} title={'Foundation'}
                               description={"JavaScript,  HTML5,  CSS3,  Sass,  Less"}/>
                        <Skill style={checklistIcon} title={'Testing'}
                               description={"Unit Tests,  Storybook,   Postman,  Git"}/>
                        <Skill style={designIcon} title={'Design'} description={"Material UI,  Ant Design"}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Skills;

