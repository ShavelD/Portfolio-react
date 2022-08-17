import React from 'react';
import s from './Project.module.css'
import sContainer from './../common/styles/Container.module.css'
import MyProjects from "./myProjects/MyProjects";


const Projects = () => {
    return (
        <div className={`${s.projectsBlock} ${sContainer.padding}`}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <h4 className={s.title}>My Projects</h4>
                <div className={s.projects}>
                    <MyProjects title={'Open project'}
                                description={"Lorem ipsum dolor ipsum dolor sit dolor  sit dolor sit dolor sit dolor sit"}
                                titleProject={'Todolists'}/>
                    <MyProjects title={'Open project'}
                                description={"Lorem sit dolor sit dolor ipsum dolor sit dolor sit sit dolor sit dolor sit"}
                                titleProject={'SocialNetwork'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;