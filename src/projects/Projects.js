import React from 'react';
import s from './Projects.module.scss'
import MyProject from "./myProjects/MyProject";
import Title from "./../common/components/title/Title"
import TodoImage from "./../assets/image/todolist2.jpg"
import SocialImage from "./../assets/image/blog1.jpg"
import FlashImage from "./../assets/image/flash4.webp"
import sContainer from "../common/styles/Container.module.scss";
import Fade from 'react-reveal/Fade';


const Projects = () => {

    const social = {
        backgroundImage: `url(${SocialImage})`,
    }

    const todolist = {
        backgroundImage: `url(${TodoImage})`,
    }

    const flashCards = {
        backgroundImage: `url(${FlashImage})`,
    }

    return (
        <div id='Projects' className={`${s.projectsBlock} ${sContainer.padding}`}>
            <div className={`${s.projectsContainer} ${sContainer.container}`}>
                {/*<Fade right>*/}
                    <Fade top>
                    <Title title={"My Projects"}/>
                    </Fade>
                <div className={s.projects}>
                    <Fade top>
                    <MyProject style={todolist}
                               titleProject={'Todolist'}
                               link={"https://shaveld.github.io/todolist-sh-ts/#/"}
                               description={"Lorem sit dolor sit dolor " + "ipsumt"}/>
                    </Fade>
                    <Fade bottom>
                    <MyProject style={flashCards}
                               titleProject={'Learning cards'}
                               description={"Lorem sit dolor sit dolor " + "ipsumt"}/>
                    </Fade>
                    <Fade top>
                        <MyProject style={social}
                                   titleProject={'Social Network'}
                                   description={"Lorem ipsum dolor ipsum dolor sit " +
                                       "dolor  sit dolor sit dolor sit dolor sit"}/>
                    </Fade>
                </div>
             {/*</Fade>*/}
        </div>
  </div>
)
}

export default Projects;