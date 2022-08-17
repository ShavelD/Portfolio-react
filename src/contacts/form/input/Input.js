import React from 'react';
import s from './Input.module.css'

const Input = () => {
    return (
        <div className={s.container}>
            <form className={s.container_inner}>
                <input type={'text'}></input>
                <input type={'text'}></input>
                <textarea></textarea>
            </form>
        </div>
    );
};

export default Input;