import React from 'react';
import s from './Skill.module.css'
import q from '../../assets/icons/q.png'

const Skill = (props) => {

    return (
        <div className={s.skill}>
            <div className={s.skillOne}><img  className={s.imgIcon} src={q}/></div>
            <h3>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    );
};

export default Skill;