import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import styles from "./Form.module.scss"
import * as Yup from 'yup';

const ContactsForm = () => {
    const validate = Yup.object({
        name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        email: Yup.string()
            .email("Email is invalid")
            .required("Required"),
        // phone: Yup.string()
        //     .max(15, "Must be 15 characters or less")
        //     .required("Required"),
    })
    return (
        <Formik
            initialValues={{ name: '', email: '', phone: '', subject: '', message: '' }}
            validationSchema={validate}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form className={styles.feedback_form} onSubmit={handleSubmit}>
                    <div className={styles.error}>{errors.name && touched.name && errors.name}</div>
                    {console.log(values)}
                    <input
                        placeholder="YOUR NAME"
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                    />

                    <input
                        placeholder="YOUR EMAIL"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <input
                        placeholder="YOUR PHONE"
                        type="tel"
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                    />
                    {errors.phone && touched.phone && errors.phone}
                    <input
                        placeholder="YOUR SUBJECT"
                        type="text"
                        name="subject"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.subject}
                    />
                    {errors.subject && touched.subject && errors.subject}
                    <textarea
                        placeholder="YOUR MESSAGE"
                        type="text"
                        name="message"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                    />
                    {errors.message && touched.message && errors.message}
                    <button type="submit" disabled={isSubmitting}>
                        Send
                    </button>
                </form>
            )}
        </Formik>
    )
}

export default ContactsForm;