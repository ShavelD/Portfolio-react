import React from 'react';
import s from './MyProject.module.scss'

const MyProject = (props) => {

    const OpenSocial = () => {
        console.log('PIPKA')
    }


    return (
        <div className={s.project}>
            <div className={s.imgContainer} style={props.style}>
                <a className={s.viewBtn}>Смотреть</a>
            </div>
            <div className={s.myProject}>
               <h3 className={s.titleProject}>{props.titleProject}</h3>
               <span className={s.description}>{props.description}</span>
            </div>
          </div>
    );
};

export default MyProject;