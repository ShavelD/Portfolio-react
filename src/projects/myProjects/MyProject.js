import React from 'react';
import s from './MyProject.module.scss'

const MyProject = (props) => {

    return (
        <div className={s.project}>
            <div className={s.imgContainer} style={props.style}>
                <a href={props.link} className={s.links}>Смотреть</a>
            </div>
            <div className={s.myProject}>
               <h3 className={s.titleProject}>{props.titleProject}</h3>
               <span className={s.description}>{props.description}</span>
            </div>
          </div>
    );
};

export default MyProject;
//
// import React from 'react';
// import s from './Project.module.scss'
//
//
// type ProjectPropsType = {
//     title: string,
//     description: string,
//     img?: any,
//     linkDemo: string,
//     linkCode: string
// }
//
// const MyProject = (props) => {
//     return (
//         <div className={s.project}>
//             <div className={s.img} style={props.style}>
//                 <div className={s.overlay}>
//                     <div className={s.description}>
//                         <h3>{props.title}</h3>
//                         <p>{props.description}</p>
//                         <div className={s.links}>
//                             <a href={props.linkDemo} className={s.btnDemo} target="_blank" rel="noreferrer">view
//                                 demo</a>
//                             <a href={props.linkCode} className={s.btnCode} target="_blank" rel="noreferrer">view
//                                 code</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default MyProject;