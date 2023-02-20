import React from 'react';
import s from './Title.module.scss'


const Title = (props) => {
    return (
        <div className={s.title}>
            <div className={s.text}>{props.text}</div>
        </div>
    );
};

export default Title;