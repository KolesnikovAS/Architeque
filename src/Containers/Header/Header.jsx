import React, {useEffect, useState} from "react";
import {useWindowSize} from 'react-use';
import { NavLink } from "react-router-dom";
import {useLockBodyScroll, useToggle} from 'react-use';
import styles from "./Header.module.scss"
import Button from "./../../Components/Button/Button"
import mailIcon from "../../Assets/images/Header/mail.png"
import phoneIcon from "../../Assets/images/Header/phone.png"

const Header = () => {

    let {width} = useWindowSize();
    const [locked, toggleLocked] = useToggle(false)
    useLockBodyScroll(locked);

    useEffect(() => {
        if (width > 1050 && locked) toggleLocked()
    }, [width]);


    const links = [{ path: "/", value: "Home" },
                { path: "/About", value: "About" },
                { path: "/Services", value: "Services" },
                { path: "/Portfolio", value: "Portfolio" },
                { path: "/Teams", value: "Teams" },
                { path: "/Contacts", value: "Contacts" }]
    return (
        <header>
            <div className={styles.contacts_line}>
                <img src={mailIcon} alt="mail" />
                <span><a href="mailto:mail@yourcompany.com">mail@yourcompany.com</a></span>
                <img src={phoneIcon} alt="phone" />
                <span><a href="tel:+8961205889">+896 120 5889 (Toll free)</a></span>
                <span>Mon - Sat | 10am - 7pm</span>
            </div>
            <div className={styles.nav_line}>
                {locked && <div className={styles.dark_layer}></div>}
                <h2>Architeque</h2>
                <nav>
                    <input onChange={() => toggleLocked()} className={styles.menu_toggle} checked={locked} id="menu_toggle" type="checkbox"/>
                    <label className={styles.menu_button} htmlFor="menu_toggle"><span></span></label>
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
