import React from "react";
import styles from "./Home.module.scss"
import slide1 from "../../Assets/images/Home/slide1.jpg"
import arrow from "../../Assets/images/Home/arrow.png"

const Home = () => {
    return (
        <section className={styles.slider}>
            <div className={styles.slider_content}>
                <h1>Modern minimalist home</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                <button><img src={arrow} alt="arrow"/></button>
                <button><img src={arrow} alt="arrow"/></button>
            </div>
            <img className={styles.slide_image} src={slide1} alt="design"/>
        </section>
    )
}

export default Home;