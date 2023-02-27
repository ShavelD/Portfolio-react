import React from 'react';
import s from './Contacts.module.scss'
import sContainer from './../common/styles/Container.module.css'
import Title from "../common/components/title/Title";
import {ContactsForm} from "./contactsForm/ContactsForm";

const Contacts = () => {
    return (
        <div id='Contacts' className={`${s.contactsBlock} ${sContainer.padding}`}>
            <div className={`${sContainer.container} ${s.container}`}>
                <Title title={"Contact"}/>
                <ContactsForm/>
            </div>
        </div>
    );
};

export default Contacts;