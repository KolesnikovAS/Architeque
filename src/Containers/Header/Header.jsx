import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss"
import mailIcon from "../../Assets/images/Header/mailicon.svg"
import phoneIcon from "../../Assets/images/Header/phoneicon.svg"

const Header = () => {
    return (
        <header>
            <div className={styles.contacts_line}>
                <img src={mailIcon} />
                <span>mail@yourcompany.com</span>
                <img src={phoneIcon} />
                <span>+896 120 5889 (Toll free)</span>
                <span>Mon - Sat | 10am - 7pm</span>
            </div>
            <div className={styles.nav_line}>
                <h1>Architeque</h1>
                <nav>
                    <ul>
                        <li><NavLink className={({ isActive }) => `${isActive ? styles.active : ''}`} to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => `${isActive ? styles.active : ''}`} to="/About">About</NavLink></li>
                        <li><NavLink className={({ isActive }) => `${isActive ? styles.active : ''}`} to="/Services">Services</NavLink></li>
                        <li><NavLink className={({ isActive }) => `${isActive ? styles.active : ''}`} to="/Portfolio">Portfolio</NavLink></li>
                        <li><NavLink className={({ isActive }) => `${isActive ? styles.active : ''}`} to="/Blog">Blog</NavLink></li>
                    </ul>
                </nav>
                <button>Let's start</button>
            </div>
        </header>
    )
}

export default Header;
