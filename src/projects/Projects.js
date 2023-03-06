import React from 'react';
import s from './Projects.module.scss'
import MyProject from "./myProjects/MyProject";
import Title from "./../common/components/title/Title"
import TodoImage from "./../assets/image/todolist2.jpg"
import SocialImage from "./../assets/image/blog1.jpg"
import FlashImage from "./../assets/image/flash4.webp"
import counters from "./../assets/image/Counter2.jpg"
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

    const counter = {
        backgroundImage: `url(${counters})`,
    }

    return (
        <div id='Projects' className={`${s.projectsBlock} ${sContainer.padding}`}>
            <div className={`${s.projectsContainer} ${sContainer.container}`}>
                <Fade top>
                    <Title title={"My Projects"}/>
                </Fade>
                <div className={s.projects}>
                    <Fade top>
                        <MyProject style={todolist}
                                   titleProject={'Todolist'}
                                   link={"https://shaveld.github.io/todolist-sh-ts/#/"}
                                   description={"Lorem sit dolor sit dolor "}/>
                    </Fade>
                    <Fade bottom>
                        <MyProject style={flashCards}
                            link={"https://shaveld.github.io/flash-cards/"}
                                   titleProject={'Learning cards'}
                                   description={"Lorem sit dolor sit dolor "}/>
                    </Fade>
                    <Fade top>
                        <MyProject style={social}
                                   link={"https://shaveld.github.io/TheSocialNetwork/"}
                                   titleProject={'Social Network'}
                                   description={"Lorem ipsum dolor ipsum dolor "}/>
                    </Fade>
                    <Fade bottom>
                        <MyProject style={counter}
                                   link={"https://shaveld.github.io/counter-my/"}
                                   titleProject={'Counter'}
                                   description={"Lorem ipsum dolor ipsum dolor "}/>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Projects;