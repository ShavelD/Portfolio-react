import {useFormik} from "formik";
import s from './ContactsForm.module.scss'
import axios from "axios";


export const ContactsForm = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            message: '',

        },
        onSubmit: values => {
            axios.post('https://gmail-smtps.vercel.app/sendMessage', {
                email: values.email,
                name: values.name,
                message: values.message
            }).then(() => {
                alert('Thanks')
                formik.resetForm()
            })
                .finally(() => {
                    formik.resetForm()
                })
        },

    })

    return (
        <div className={s.container}>
            <form className={s.form} onSubmit={formik.handleSubmit}>
                <label>
                    <input className={s.input} type="text" placeholder={'Name'}
                           {...formik.getFieldProps('name')}/>
                </label>
                <label>
                    <input className={s.input} type="text" placeholder={'Your Email'}
                           {...formik.getFieldProps('email')}/>
                </label>
                <label>
                        <textarea className={s.textarea} placeholder={'Your Message'}
                                  {...formik.getFieldProps('message')}/>
                </label>
                <button className={s.btn} type="submit">SEND MESSAGE</button>
            </form>
        </div>
    )

}