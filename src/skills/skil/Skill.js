import React from 'react';
import s from './Skill.module.css'

const Skill = (props) => {

    return (
        <div className={s.skill}>
            <div className={s.skillOne}>
                <div style={props.style} className={s.skillOneIcon}></div>
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    );
};

export default Skill;