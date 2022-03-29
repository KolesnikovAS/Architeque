import React from "react";
import styles from "./Home.module.scss"
import slide1 from "../../Assets/images/Home/slide1.jpg"
import arrow from "../../Assets/images/Home/arrow.png"
import videoPoster from "../../Assets/images/Home/videoPoster.jpg"
import Button from "../../Components/button/Button";
import brendIcon1 from "../../Assets/images/Home/brendicon1.png";
import brendIcon2 from "../../Assets/images/Home/brendicon2.png";
import brendIcon3 from "../../Assets/images/Home/brendicon3.png";
import brendIcon4 from "../../Assets/images/Home/brendicon4.png";

const Home = () => {
    return (
        <main>
            <section className={styles.slider}>
                <div className={styles.slider_content}>
                    <h1>Modern minimalist home</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                    <button><img src={arrow} alt="arrow" /></button>
                    <button><img src={arrow} alt="arrow" /></button>
                </div>
                <img className={styles.slide_image} src={slide1} alt="design" />
            </section>

            <section className={styles.about}>
                <div className={styles.promo}>
                    <video src="#" width="883px" height="419px" controls="controls" poster={videoPoster} />
                    <ul>
                        <li><img src={brendIcon1} alt="brendicon" /><span>LOGOIPSUM</span></li>
                        <li><img src={brendIcon2} alt="brendicon" /><span>logoipsum</span></li>
                        <li><img src={brendIcon3} alt="brendicon" /><span>logoipsum</span></li>
                        <li><img src={brendIcon4} alt="brendicon" /><span>LOGOIPSUM</span></li>
                    </ul>
                </div>
                <div className={styles.discription}>
                    <h2>About</h2>
                    <p style={{ textAlign: "justify", marginBottom: "57px" }} >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                    <Button backgroundColor={"black"} color={"white"}>Learn More</Button>
                    <p style={{ marginTop: "197px" }}>"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution."</p>
                    <p style={{ color: "#BFBFBF", fontFamily: "Poppins-Bold, san-serif" }}>Ramones Aoky</p>
                    <p style={{ color: "black", fontFamily: "Poppins-SemiBold, san-serif" }}>CEO Company</p>
                </div>
            </section>

            <section className={styles.achievments}>
                <div className={styles.achievments_content}>
                    <div className={styles.achievments_title}>
                        <h1>Professional teams</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                        <Button border={"2px solid white"} color={"white"}>Learn more</Button>
                    </div>
                    <div className={styles.achievments_numbers}><span>90%</span><p>Clients statisfied</p></div>
                    <div className={styles.achievments_numbers}><span>95%</span><p>Projects success</p></div>
                </div>
            </section>
        </main>
    )
}

export default Home;