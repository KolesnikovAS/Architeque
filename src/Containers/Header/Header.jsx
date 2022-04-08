import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss"
import Button from "./../../Components/Button/Button"
import mailIcon from "../../Assets/images/Header/mail.png"
import phoneIcon from "../../Assets/images/Header/phone.png"

const Header = () => {
    const links = [{ path: "/", value: "Home" },
    { path: "/About", value: "About" },
    { path: "/Services", value: "Services" },
    { path: "/Portfolio", value: "Portfolio" },
    { path: "/Teams", value: "Teams" }]
    return (
        <header>
            <div className={styles.contacts_line}>
                <img src={mailIcon} alt="mail" />
                <span>mail@yourcompany.com</span>
                <img src={phoneIcon} alt="phone" />
                <span><a href="tel:+8961205889">+896 120 5889 (Toll free)</a></span>
                <span>Mon - Sat | 10am - 7pm</span>
            </div>
            <div className={styles.nav_line}>
                <h2>Architeque</h2>
                <nav>
                    <input className={styles.menu_toggle} type="checkbox" id="menu_toggle" />
                    <label className={styles.menu_button} for="menu_toggle"><span></span></label>
                    <ul className={styles.menu_box}>
                        {links.map((link, index) => <li key={index}><NavLink
                            className={({ isActive }) => `${isActive ? styles.active : ''}`}
                            to={link.path}>{link.value}</NavLink></li>)}
                    </ul>
                </nav>
                <Button style={"black"} size={"medium"} title={"Let's start"} />
            </div>
        </header>
    )
}

export default Header;
