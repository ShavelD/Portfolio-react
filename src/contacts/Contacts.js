import React from 'react';
import s from './Contacts.module.css'
import sContainer from './../common/styles/Container.module.css'

const Contacts = () => {
    return (
        <div id='Contacts' className={`${s.contactsBlock} ${sContainer.padding}`}>
            <div className={`${sContainer.container} ${s.container}`}>
                <h2 className={s.title}>Contacts</h2>
                    <form className={s.contactsForm}>
                        <input type={'text'}></input>
                        <input type={'text'}></input>
                        <textarea></textarea>
                    </form>
                <button type="submit" className={s.submitBtn}>Отправить</button>
            </div>
        </div>
    );
};

export default Contacts;