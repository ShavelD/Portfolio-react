import React from 'react';
import s from './Button.module.css'

const Button = () => {
    return (
        <div className={s.container}>
            <button>Send</button>
        </div>
    );
};

export default Button;