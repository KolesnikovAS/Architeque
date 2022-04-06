import React from "react";
import styles from "./Contacts.module.scss";
import PageTitle from "../../Containers/PageTitle/PageTitle";
import phone from "../../Assets/images/Footer/phone.png"
import position from "../../Assets/images/Footer/position.png"
import mail from "../../Assets/images/Footer/mail.png"
import { Formik } from "formik";
import * as Yup from 'yup';
import Input from "../../Components/Input/Input";
import Textarea from "../../Components/Input/Textarea";

const Contacts = () => {
    const validate = Yup.object({
        name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Name is Required"),
        email: Yup.string()
            .email("Email is invalid")
            .required("Email is Required")
    });
    const display = (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            resetForm();
        }, 400);
    }
    return (
        <main>
            <PageTitle title={"Contacts"} />

            <section className={styles.contacts}>
                <div className={styles.contacts_content}>
                    <p className={styles.notes}>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                    <h2>Get start's project</h2>
                    <div className={styles.contacts_container}>
                        <h3>Architeque</h3>
                        <h5>Office Hours</h5>
                        <p>Mon-Sat: 10am - 7pm</p>
                        <p style={{ color: "#ef0000" }}>Sun: closed</p>
                        <ul>
                            <li><img src={position} alt="position" /><p>Company No. 08116577, 101 Baker Street, New York, 12345, USA.</p></li>
                            <li><img src={phone} alt="phone" /><p>+896 120 5889</p></li>
                            <li><img src={mail} alt="mail" /><p>mail@company.com</p></li>
                        </ul>
                    </div>

                    <Formik
                        initialValues={{ name: '', email: '', phone: '', subject: '', message: '', surname: '' }}
                        validationSchema={validate}
                        onSubmit={display}
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
                                    placeholder={"YOUR MESSAGE"}
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

                </div>
            </section>

            <section className={styles.google_map}>
                <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1nDAPw1IBm4lTOFJe-Vh0w3kdBwW4VmfN&ehbc=2E312F" width="1920" height="545" title="map"></iframe>
            </section>


        </main>
    )
}

export default Contacts;