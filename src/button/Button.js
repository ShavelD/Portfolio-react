import React from 'react';
import s from './Button.module.scss'

const Button = (props) => {
    return (
        <a href="" className={s.btn}>{props.title}</a>
    );
};

export default Button;
