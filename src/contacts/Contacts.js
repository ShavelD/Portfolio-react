import React from 'react';
import s from './Contacts.module.scss'
import sContainer from './../common/styles/Container.module.css'
import Title from "../common/components/title/Title";
import {ContactsForm} from "./contactsForm/ContactsForm";
import Zoom from 'react-reveal/Zoom';


const Contacts = () => {
    return (
        <div id='Contacts' className={`${s.contactsBlock} ${sContainer.padding}`}>
            <div className={`${sContainer.container} ${s.container}`}>
                <Zoom>
                <Title title={"Contact"}/>
                <ContactsForm/>
                </Zoom>
            </div>
        </div>
    );
};

export default Contacts;