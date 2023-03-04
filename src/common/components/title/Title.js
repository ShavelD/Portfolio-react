import React from 'react';
import s from './Title.module.scss'


const Title = (props) => {
    return (
        <h2 className={s.title}>{props.title}</h2>
    );
};

export default Title;

// import React from "react";
// import s from "./Title.module.scss"
//
// type TitlePropsType={
//     title: string
// }
//
// export const Title: React.FC<TitlePropsType> = (props) => {
//     return (
//         <h2 className={s.title}>{props.title}</h2>
//     )
// }


// const Title = (props) => {
//     return (
//         <div className={s.title}>
//             <div className={s.text}>{props.text}</div>
//         </div>
//     );
// };
//
// export default Title;