import React from 'react';
import s from './Form.module.css'
import Input from "./input/Input";

const Form = () => {
    return (
        <div className={s.formBlock}>
                <Input/>
        </div>
    );
};

export default Form;