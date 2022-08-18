import React from 'react';
import s from './MyProjectSocialNetwork.module.css'
import Button from "../../button/Button";

const MyProjectSocialNetwork = (props) => {

    const OpenSocial = () => {
        console.log('PIPKA')
    }


    return (
        <div className={s.project}>
            <div className={s.imgContainer}>
                <Button title={'Open Todolist'} callBack={OpenSocial}/>
            </div>
            <div className={s.myProject}>
                <p>{props.titleProject}</p>
                <span>
                {props.description}
            </span>
            </div>
        </div>
    );
};

export default MyProjectSocialNetwork;