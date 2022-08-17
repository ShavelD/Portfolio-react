import React from 'react';
import s from './MyProject.module.css'

const MyProjects = (props) => {
    return (
        <div className={s.project}>
            <div className={s.iconProject}>
                    <h4>{props.title}</h4>
            </div>
            <div className={s.myProject}>
                <p>{props.titleProject}</p>
                <span className={s.description}>
                {props.description}
            </span>
            </div>
        </div>
    );
};

export default MyProjects;