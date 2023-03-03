import React from 'react';
import s from './Contacts.module.scss'
import sContainer from './../common/styles/Container.module.css'
import Title from "../common/components/title/Title";
import {ContactsForm} from "./contactsForm/ContactsForm";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


const Contacts = () => {
    return (
        <div id='Contacts' className={`${s.contactsBlock} ${sContainer.padding}`}>
            <div className={`${sContainer.container} ${s.container}`}>
                    <Fade top>
                        <Title title={"Contact"}/></Fade>
                <Zoom>
                <ContactsForm/>
                </Zoom>
            </div>
        </div>
    );
};

export default Contacts;