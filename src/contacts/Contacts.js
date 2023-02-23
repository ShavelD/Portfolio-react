import React from 'react';
import s from './Contacts.module.scss'
import sContainer from './../common/styles/Container.module.css'
import Title from "../common/components/title/Title";

const Contacts = () => {
    return (
        <div id='Contacts' className={`${s.contactsBlock} ${sContainer.padding}`}>
            <div className={`${sContainer.container} ${s.container}`}>
                <Title title={"Contact"}/>
                <form className={s.contactsForm}>
                    <label><input type={'text'}></input></label>
                    <label><input type={'text'}></input></label>
                    <label><textarea></textarea></label>
                    <button type="submit" >Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;