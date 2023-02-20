import React from 'react';
import s from './Button.module.css'

const Button = (props) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler} className={s.finalClass}>{props.title}</button>
    );
};

export default Button;
