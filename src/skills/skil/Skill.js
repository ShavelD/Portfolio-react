import React from 'react';
import s from './Skill.module.css'

const Skill = (props) => {

    return (
        <div className={s.skill}>
            <div className={s.skillOne}>
                <div style={props.style} className={s.skillOneIcon}></div>
            </div>
            <h2>{props.title}</h2>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    );
};

export default Skill;