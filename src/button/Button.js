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