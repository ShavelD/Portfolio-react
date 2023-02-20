import React from 'react';
import s from './Projects.module.scss'
import sContainer from './../common/styles/Container.module.css'
import MyProject from "./myProjects/MyProject";
import Title from "./../common/components/title/Title"
import TodoImage from "./../assets/image/images.png"
import SocialImage from "./../assets/image/SocialNetworking.png"




const Projects = () => {

    const social = {
        backgroundImage: `url(${SocialImage})`,
    }

    const todolist = {
        backgroundImage: `url(${TodoImage})`,
    }

    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
               <Title text={"My Projects"}/>
                <div className={s.projects}>
                    <MyProject style={social}
                               titleProject={'Social Network'}
                               description={"Lorem ipsum dolor ipsum dolor sit " +
                               "dolor  sit dolor sit dolor sit dolor sit"} />
                    <MyProject style={todolist}
                               titleProject={'Todolist'}
                               description={"Lorem sit dolor sit dolor " +"ipsumt"} />
                </div>
            </div>
        </div>
    );
};

export default Projects;