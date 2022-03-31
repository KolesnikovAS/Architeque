import React from "react";
import styles from "./Home.module.scss"
import slide1Img from "../../Assets/images/Home/slide1.jpg"
import arrow from "../../Assets/images/Home/arrow.png"
import videoPoster from "../../Assets/images/Home/videoPoster.jpg"
import Button from "../../Components/button/Button";
import Offer from "../../Components/offer/Offer"
import Banner from "../../Containers/banner/Banner"
import brendIcon1 from "../../Assets/images/Home/brendicon1.png";
import brendIcon2 from "../../Assets/images/Home/brendicon2.png";
import brendIcon3 from "../../Assets/images/Home/brendicon3.png";
import brendIcon4 from "../../Assets/images/Home/brendicon4.png";
import advantagesImg from "../../Assets/images/Home/advantages.jpg"
import doubleCheck from "../../Assets/images/Home/doublecheck.png"
import portfolioImage1 from "../../Assets/images/Home/portfolioslide1.jpg";
import portfolioImage2 from "../../Assets/images/Home/portfolioslide2.jpg";
import portfolioImage3 from "../../Assets/images/Home/portfolioslide3.jpg";
import portfolioImage4 from "../../Assets/images/Home/portfolioslide4.jpg";

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
                <img className={styles.slide_image} src={slide1Img} alt="design" />
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
                    <p>&nbsp;</p>
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

            <section className={styles.advantages}>
                <div className={styles.advantages_content}>
                    <div className={styles.advantages_content_discription}>
                        <h2>Why us?</h2>
                        <table>
                            <tr>
                                <td><img src={doubleCheck} alt="doublecheck" /><span>Profesional works</span></td>
                                <td><img src={doubleCheck} alt="doublecheck" /><span>Best value solutions</span></td>
                            </tr>
                            <tr>
                                <td><img src={doubleCheck} alt="doublecheck" /><span>100% Guarantee</span></td>
                                <td><img src={doubleCheck} alt="doublecheck" /><span>High professional teams</span></td>
                            </tr>
                            <tr>
                                <td><img src={doubleCheck} alt="doublecheck" /><span>Profesional teams</span></td>
                                <td><img src={doubleCheck} alt="doublecheck" /><span>Architecture licensed</span></td>
                            </tr>
                        </table>
                        <p>We’re committed to delivering eye-catching architect designs</p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <img className={styles.advantages_content_image} src={advantagesImg} alt="design" />
                </div>
            </section>

            <section className={styles.services}>
                <div className={styles.services_content}>
                    <h1 className={styles.services_title}>Our Services</h1>
                    <p className={styles.services_discription}>It is a long established fact that a reader will be distracted.</p>
                    <div className={styles.offers_container}>
                        <Offer title={"Interior Designs"} discription={"It is a long established fact that a reader will be distracted by the readable content."} />
                        <Offer title={"Building Designs"} discription={"It is a long established fact that a reader will be distracted by the readable content."} />
                        <Offer title={"Landscape Designs"} discription={"It is a long established fact that a reader will be distracted by the readable content."} />
                    </div>
                </div>
            </section>

            <Banner />

            <section className={styles.portfolio}>
                <img src={portfolioImage1} alt="building"/>
                <img src={portfolioImage2} alt="building"/>
                <img src={portfolioImage3} alt="building"/>
                <img src={portfolioImage4} alt="building"/>
            </section>
        </main>
    )
}

export default Home;