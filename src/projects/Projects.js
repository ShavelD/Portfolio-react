import React, {useState} from 'react';
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
    // const [posts, setPosts] = useState([
    //     {id: 1, title: "Todolist", body: "Lorem Lorem Lorem ipsum", style: todolist, link: "https://shaveld.github.io/todolist-sh-ts/"},
    //     {id: 1, title: "Learning cards", body: "Lorem Lorem Lorem ipsum", style: flashCards, link: "https://shaveld.github.io/flash-cards/"},
    //     {id: 1, title: "Social Network", body: "Lorem Lorem Lorem ipsum", style: social, link: "https://shaveld.github.io/TheSocialNetwork/"},
    //     {id: 1, title: "Counter", body: "Lorem Lorem Lorem ipsum", style: counter, link: "https://shaveld.github.io/counter-my/"},
    //
    // ])

    return (
        <div id='Projects' className={`${s.projectsBlock} ${sContainer.padding}`}>
            <div className={`${s.projectsContainer} ${sContainer.container}`}>
                <Fade top>
                    <Title title={"My Projects"}/>
                </Fade>
                <div className={s.projects}>
                    <Fade top>
                        {/*{posts.map((post) => <MyProject post={post} key={post.id}/>)}*/}
                        <MyProject style={todolist}
                                   link={"https://shaveld.github.io/todolist-sh-ts/"}
                                   titleProject={'Todolist'}
                                   description={"My personal project. Implemented an application interface for managing and tracking the progress of tasks "}/>
                    </Fade>
                    <Fade bottom>
                        <MyProject style={flashCards}
                            link={"https://shaveld.github.io/flash-cards/"}
                                   titleProject={'Learning cards'}
                                   description={"The application is a platform where users can learn a foreign language with flashcards. Users can keep track of their achievements, rankings, etc"}/>
                    </Fade>
                    <Fade top>
                        <MyProject style={social}
                                   link={"https://shaveld.github.io/TheSocialNetwork/"}
                                   titleProject={'Social Network'}
                                   description={"Developed a small social network application "}/>
                    </Fade>
                    <Fade bottom>
                        <MyProject style={counter}
                                   link={"https://shaveld.github.io/counter-my/"}
                                   titleProject={'Counter'}
                                   description={"Made my first counter with redux"}/>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Projects;