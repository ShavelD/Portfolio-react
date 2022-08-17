import React from 'react';
import s from './Button.module.css'

const Button = (props) => {
    return (
        <div className={s.container}>
            <button className={s.sendBtn}>{props.title}</button>
        </div>
    );
};

export default Button;