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

const Footer = () => {

    const to_top = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <footer>
            <div onClick={to_top} className={styles.to_top}>
                <div className={styles.to_top_arrow}></div>
            </div>
            <div className={styles.footer_content}>
                <div className={styles.flex_container}>
                    <div className={styles.socials}>
                        <h3>Architeque</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <ul>
                            <li className={styles.social_icon}><img src={facebook} alt="facebook" /></li>
                            <li className={styles.social_icon}><img src={twiter} alt="twiter" /></li>
                            <li className={styles.social_icon}><img src={inicon} alt="inIcon" /></li>
                            <li className={styles.social_icon}><img src={instagram} alt="istagram" /></li>
                        </ul>
                    </div>
                    <div className={styles.links}>
                        <h5>Site Links</h5>
                        <ul>
                            <li><NavLink to="/About">About Us</NavLink></li>
                            <li><NavLink to="/Services">Our Services</NavLink></li>
                            <li><NavLink to="/Teams">Our Team</NavLink></li>
                            <li><NavLink to="/Portfolio">Projects Gallery</NavLink></li>
                        </ul>
                    </div>
                    <div className={styles.links}>
                        <h5>Explore Links</h5>
                        <ul>
                            <li><NavLink to="/Contacts">Contact Us</NavLink></li>
                            <li><NavLink to="/Contacts">Pricing Table</NavLink></li>
                            <li><NavLink to="/Contacts">Terms &#38; Conditions</NavLink></li>
                            <li><NavLink to="/Contacts">Privacy policy</NavLink></li>
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
                        <input placeholder={"Enter your email to get newsletter"} />
                        <button>Subscribe</button>
                    </form>
                    <p>© Copyright 2022 by Architeque - Services site part of JW-Construction .co .ltd</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;