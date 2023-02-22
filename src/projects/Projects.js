import React from 'react';
import s from './Projects.module.scss'
import MyProject from "./myProjects/MyProject";
import Title from "./../common/components/title/Title"
import TodoImage from "./../assets/image/images.png"
import SocialImage from "./../assets/image/SocialNetworking.png"
import sContainer from "../common/styles/Container.module.css";


//
//
// const Projects = () => {
//
//     const social = {
//         backgroundImage: `url(${SocialImage})`,
//     }
//
//     const todolist = {
//         backgroundImage: `url(${TodoImage})`,
//     }
//
//     return (
//         <div id='Projects' className={s.projectsBlock}>
//             <div className={`${sContainer.container} ${s.projectsContainer}`}>
//                <Title text={"My Projects"}/>
//                 <div className={s.projects}>
//                     <MyProject style={social}
//                                titleProject={'Social Network'}
//                                description={"Lorem ipsum dolor ipsum dolor sit " +
//                                "dolor  sit dolor sit dolor sit dolor sit"} />
//                     <MyProject style={todolist}
//                                titleProject={'Todolist'}
//                                description={"Lorem sit dolor sit dolor " +"ipsumt"} />
//                     <MyProject style={todolist}
//                                titleProject={'1'}
//                                description={"Lorem sit dolor sit dolor " +"ipsumt"} />
//                     <MyProject style={todolist}
//                                titleProject={'2'}
//                                description={"Lorem sit dolor sit dolor " +"ipsumt"} />
//                     <MyProject style={todolist}
//                                titleProject={'3'}
//                                description={"Lorem sit dolor sit dolor " +"ipsumt"} />
//                     <MyProject style={todolist}
//                                titleProject={'4'}
//                                description={"Lorem sit dolor sit dolor " +"ipsumt"} />
//                     <MyProject style={todolist}
//                                titleProject={'5'}
//                                description={"Lorem sit dolor sit dolor " +"ipsumt"} />
//                     <MyProject style={todolist}
//                                titleProject={'6'}
//                                description={"Lorem sit dolor sit dolor " +"ipsumt"} />
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Projects;

const Projects = () => {

        const social = {
        backgroundImage: `url(${SocialImage})`,
    }

    const todolist = {
        backgroundImage: `url(${TodoImage})`,
    }

    return (
        <div id='Projects' className={`${s.projectsBlock} ${sContainer.padding}`}>
            <div className={`${s.projectsContainer} ${sContainer.container}`}>
                <Title title={"My Projects"}/>
                <div className={s.projects}>
                    <MyProject style={social}
                               titleProject={'Social Network'}
                               description={"Lorem ipsum dolor ipsum dolor sit " +
                                   "dolor  sit dolor sit dolor sit dolor sit"} />
                    <MyProject style={todolist}
                               titleProject={'Todolist'}
                               description={"Lorem sit dolor sit dolor " +"ipsumt"} />
                    <MyProject style={todolist}
                               titleProject={'1'}
                               description={"Lorem sit dolor sit dolor " +"ipsumt"} />
                    <MyProject style={todolist}
                               titleProject={'2'}
                               description={"Lorem sit dolor sit dolor " +"ipsumt"} />
                    <MyProject style={todolist}
                               titleProject={'3'}
                               description={"Lorem sit dolor sit dolor " +"ipsumt"} />
                    <MyProject style={todolist}
                               titleProject={'4'}
                               description={"Lorem sit dolor sit dolor " +"ipsumt"} />
                    <MyProject style={todolist}
                               titleProject={'5'}
                               description={"Lorem sit dolor sit dolor " +"ipsumt"} />
                    <MyProject style={todolist}
                               titleProject={'6'}
                               description={"Lorem sit dolor sit dolor " +"ipsumt"} />
                </div>
            </div>
        </div>
    )
}

export default Projects;