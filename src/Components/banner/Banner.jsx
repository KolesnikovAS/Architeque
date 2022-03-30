import React from "react";
import Button from "../button/Button";
import styles from "./Banner.module.scss"
import bgimage from "../../Assets/images/Banner/banner.png"

const Banner = (props) => {
    return (
        <section className={styles.banner}>
            <img src={bgimage} className={styles.banner_image} alt="lines"/>
            <div className={styles.banner_content}>
                <h4>Architeque</h4>
                <p>We’re committed to delivering eye-catching architect designs</p>
                <Button color={"white"} border={"2px solid white"}>Contact Us</Button>
            </div>
        </section>
    )
}

export default Banner;