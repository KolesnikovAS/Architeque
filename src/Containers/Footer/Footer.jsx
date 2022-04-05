import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss"
import phone from "../../Assets/images/Footer/phone.png"
import position from "../../Assets/images/Footer/position.png"
import mail from "../../Assets/images/Footer/mail.png"
import facebook from "../../Assets/images/Footer/facebook.png"
import inicon from "../../Assets/images/Footer/in.png"
import instagram from "../../Assets/images/Footer/instagram.png"
import twiter from "../../Assets/images/Footer/twiter.png"
import ToTop from "../../Components/ToTop/ToTop";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";

const Footer = () => {

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    const socials = [{ icon: facebook, alt: "facebook" },
    { icon: twiter, alt: "twiter" },
    { icon: inicon, alt: "inicon" },
    { icon: instagram, alt: "instagram" },];
    const siteLinks = [{ path: "/About", value: "About Us" },
    { path: "/Services", value: "Our Services" },
    { path: "/Teams", value: "Our Team" },
    { path: "/Portfolio", value: "Project Gallery" },]
    const exploreLinks = [{ path: "/Contacts", value: "Contact Us" },
    { path: "/Contacts", value: "Pricing Table" },
    { path: "/Contacts", value: "Terms & Conditions" },
    { path: "/Contacts", value: "Privacy policy" },]
    return (
        <footer>
            <ToTop toTop={toTop} />
            <div className={styles.footer_content}>
                <div className={styles.flex_container}>
                    <div className={styles.socials}>
                        <h3>Architeque</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <ul>
                            {socials.map((item, index) =>
                                <li key={index} className={styles.social_icon}><img src={item.icon} alt={item.alt} /></li>)}
                        </ul>
                    </div>
                    <div className={styles.links}>
                        <h5>Site Links</h5>
                        <ul>
                            {siteLinks.map((link, index) =>
                                <li key={index}><NavLink to={link.path}>{link.value}</NavLink></li>)}
                        </ul>
                    </div>
                    <div className={styles.links}>
                        <h5>Explore Links</h5>
                        <ul>
                            {exploreLinks.map((link, index) =>
                                <li key={index}><NavLink to={link.path}>{link.value}</NavLink></li>)}
                        </ul>
                    </div>
                    <div className={styles.contacts}>
                        <h5>Contact Site</h5>
                        <ul>
                            <li><img src={position} alt="position" /><p>Company No. 08116577, 101 Baker Street, New York, 12345, USA.</p></li>
                            <li><img src={phone} alt="phone" /><p>+896 120 5889</p></li>
                            <li><img src={mail} alt="mail" /><p>mail@company.com</p></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.bottom_container}>
                    <form>
                        <legend>Email Newsletter</legend>
                        <Input style={"dark"} size={"small"} placeholder={"Enter your email to get newsletter"} />
                        <Button style={"solid_white"} size={"small"} title={"Subscibe"}/>
                    </form>
                    <p>© Copyright 2022 by Architeque - Services site part of JW-Construction .co .ltd</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;