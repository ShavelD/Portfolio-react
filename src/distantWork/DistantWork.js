import React from 'react';
import s from './DistantWork.module.scss'
import sContainer from "../common/styles/Container.module.scss";

const DistantWork = () => {
    return (
        <div className={`${s.mainBlock} ${sContainer.padding}`}>
            <div className={`${s.distantContainer} ${sContainer.container}`}>
                <div className={s.text}>
                    <h2 className={s.title}>Considering remote work options</h2>
                    <button className={s.button}>take me to work</button>
                </div>
            </div>
        </div>
    );
};

export default DistantWork;