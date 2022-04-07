import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss"
import ToTopButton from "../../Components/ToTopButton/ToTopButton";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import images from "./FooterImages"

const Footer = () => {
    const socials = [{ icon: images.facebook, alt: "facebook" },
                    { icon: images.twiter, alt: "twiter" },
                    { icon: images.inicon, alt: "inicon" },
                    { icon: images.instagram, alt: "instagram" },];
    const siteLinks = [{ path: "/About", value: "About Us" },
                    { path: "/Services", value: "Our Services" },
                    { path: "/Teams", value: "Our Team" },
                    { path: "/Portfolio", value: "Project Gallery" },]
    const exploreLinks = [{ path: "/Contacts", value: "Contact Us" },
                    { path: "/Contacts", value: "Pricing Table" },
                    { path: "/Contacts", value: "Terms & Conditions" },
                    { path: "/Contacts", value: "Privacy policy" },]
    const contacts = [{icon: images.position, value: "Company No. 08116577, 101 Baker Street, New York, 12345, USA."},
                    {icon: images.phone, value: "+896 120 5889"},
                    {icon: images.mail, value: "mail@company.com"}];
    return (
        <footer>
            <ToTopButton />
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
                            {contacts.map(({icon, value}, index) =>
                                <li key={index} ><img src={icon} alt="icon" /><p>{value}</p></li>)}
                        </ul>
                    </div>
                </div>
                <div className={styles.bottom_container}>
                    <form>
                        <legend>Email Newsletter</legend>
                        <Input style={"dark"} size={"small"} placeholder={"Enter your email to get newsletter"} />
                        <Button style={"solid_white"} size={"small"} title={"Subscibe"} />
                    </form>
                    <p>© Copyright {new Date().getFullYear()} by Architeque - Services site part of JW-Construction .co .ltd</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;