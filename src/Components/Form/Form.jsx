import { Formik } from "formik";
import React from "react";
import styles from "./Form.module.scss"
import * as Yup from 'yup';
import {Input, Textarea} from "./Input/Input";

const ContactsForm = () => {
    const validate = Yup.object({
        name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Name is Required"),
        email: Yup.string()
            .email("Email is invalid")
            .required("Email is Required")
    })
    return (
        <Formik
            initialValues={{ name: '', email: '', phone: '', subject: '', message: '', surname: '' }}
            validationSchema={validate}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    resetForm();
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
            }) => (
                <form className={styles.feedback_form} onSubmit={handleSubmit}>
                    <Input
                        placeholder={"YOUR NAME"}
                        type={"text"}
                        name="name"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.name}
                        errors={errors.name}
                        touched={touched.name} />
                    <Input
                        placeholder={"YOUR EMAIL"}
                        type={"text"}
                        name="email"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.email}
                        errors={errors.email}
                        touched={touched.email} />
                    <Input
                        placeholder={"YOUR PHONE"}
                        type={"tel"}
                        name="phone"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.phone}
                        errors={errors.phone}
                        touched={touched.phone} />
                    <Input
                        placeholder={"YOUR SUBJECT"}
                        type={"text"}
                        name="subject"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.subject}
                        errors={errors.subject}
                        touched={touched.subject} />
                    <Textarea
                        placeholder={"YOUR SUBJECT"}
                        type={"text"}
                        name="message"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.message}
                        errors={errors.message}
                        touched={touched.message} />
                    <button type="submit" disabled={isSubmitting}>Send</button>
                </form>
            )}
        </Formik>
    )
}

export default ContactsForm;