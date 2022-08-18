import React from 'react';

const Button = (props) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler}>{props.title}</button>
    );
};

export default Button;

// import s from './Button.module.css'
//
// const Button = ({red, className},...props) => {
//
//     const finalClassName = `${red ? s.red : s.default} ${className}`
//
//     const onClickHandler = () => {
//         props.callBack()
//     }
//
//     return (
//         <button onClick={onClickHandler} className={finalClassName}>{props.title}</button>
//     );
// };
//
// export default Button;