import React from 'react';
import s from './MyProject.module.scss'

const MyProject = (props) => {

    return (
        <div className={s.container}>
            <div className={s.overlay}>
            <div className={s.imgContainer} style={props.style}>
                <a href={props.link} className={s.btnDemo} target="_blank" rel="noreferrer">view demo</a>
            </div>
            </div>
            <div className={s.myProject}>
               <h3 className={s.titleProject}>{props.titleProject}</h3>
               <span className={s.description}>{props.description}</span>
            </div>
          </div>
    );
};

export default MyProject;
