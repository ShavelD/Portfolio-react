import React from 'react';
import s from './Contacts.module.css'
import sContainer from './../common/styles/Container.module.css'
import Form from "./form/Form";
import Button from "./form/button/Button";

const Contacts = () => {
    return (
        <div className={`${s.contactsBlock} ${sContainer.padding}`}>
            <div className={`${sContainer.container} ${s.container}`}>
                <h6 className={s.title}>Contacts</h6>
                <div className={s.contacts}>
            <Form />
                </div>
                <Button />
            </div>
        </div>
    );
};

export default Contacts;