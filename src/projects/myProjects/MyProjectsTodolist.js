import React from 'react';
import s from './MyProjectSocialNetwork.module.css'
import Button from "../../button/Button";

const MyProjects = (props) => {

    const OpenTodolist = () => {
        console.log('PEPKA')
    }

    return (
        <div className={s.project}>
            <div className={s.imgContainer}>
                <Button title={'Open SocialNetwork'} callBack={OpenTodolist}/>
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

export default MyProjects;