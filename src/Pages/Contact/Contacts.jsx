import React from "react";
import styles from "./Contacts.module.scss";
import PageTitle from "../../Containers/PageTitle/PageTitle";
import phone from "../../Assets/images/Footer/phone.png"
import position from "../../Assets/images/Footer/position.png"
import mail from "../../Assets/images/Footer/mail.png"
import ContactsForm from "../../Components/Form/Form";

const Contacts = () => {
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
                    <ContactsForm />

                </div>
            </section>

            <section className={styles.google_map}>
                <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1nDAPw1IBm4lTOFJe-Vh0w3kdBwW4VmfN&ehbc=2E312F" width="1920" height="535" title="map"></iframe>
            </section>


        </main>
    )
}

export default Contacts;