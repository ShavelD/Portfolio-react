import React from 'react';
import s from './DistantWork.module.css'
import sContainer from "../common/styles/Container.module.css";

const DistantWork = () => {
    return (
        <div className={`${s.mainBlock} ${sContainer.padding}`}>
            <div className={`${s.distantContainer} ${sContainer.container}`}>
                <div className={s.text}>
                    <h5>Considering remote work options</h5>
                    <button className={s.button}>take me to work</button>
                </div>
            </div>
        </div>
    );
};

export default DistantWork;