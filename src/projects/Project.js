import React from 'react';
import s from './Project.module.css'
import sContainer from './../common/styles/Container.module.css'
import MyProjectSocialNetwork from "./myProjects/MyProjectSocialNetwork";
import MyProjectsTodolist from "./myProjects/MyProjectsTodolist";


const Projects = () => {
    return (
        <div className={`${s.projectsBlock} ${sContainer.padding}`}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <h4 className={s.title}>My Projects</h4>
                <div className={s.projects}>
                    <MyProjectSocialNetwork description={"Lorem ipsum dolor ipsum dolor sit " +
                        "dolor  sit dolor sit dolor sit dolor sit"}
                                            titleProject={'Todolist'}/>
                    <MyProjectsTodolist description={"Lorem sit dolor sit dolor " +
                        "ipsum dolor sit dolor sit sit dolor sit dolor sit"}
                                        titleProject={'SocialNetwork'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;