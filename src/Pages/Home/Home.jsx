import React from "react";
import styles from "./Home.module.scss"
import slide1Img from "../../Assets/images/Home/slide1.jpg"
import arrow from "../../Assets/images/Home/arrow.png"
import videoPoster from "../../Assets/images/Home/videoPoster.jpg"
import Button from "../../Components/Button/Button";
import Offer from "../../Components/Offer/Offer"
import Banner from "../../Containers/Banner/Banner"
import brendIcon1 from "../../Assets/images/Home/brendicon1.png";
import brendIcon2 from "../../Assets/images/Home/brendicon2.png";
import brendIcon3 from "../../Assets/images/Home/brendicon3.png";
import brendIcon4 from "../../Assets/images/Home/brendicon4.png";
import advantagesImg from "../../Assets/images/Home/advantages.jpg"
import doubleCheck from "../../Assets/images/Home/doublecheck.png"
import PortfolioSlider from "../../Containers/PortfolioSlider/PortfolioSlider";
import RoundProgress from "../../Components/RoundProgress/RoundProgress";

const Home = () => {
    const partners = [{ icon: brendIcon1, name: "LOGOIPSUM" },
    { icon: brendIcon2, name: "logoipsum" },
    { icon: brendIcon3, name: "logoipsum" },
    { icon: brendIcon4, name: "LOGOIPSUM" }]
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
                        {partners.map((partner, index) =>
                            <li key={index}><img src={partner.icon} alt="brendicon" /><span>{partner.name}</span></li>)}
                    </ul>
                </div>
                <div className={styles.discription}>
                    <h2>About</h2>
                    <p style={{ textAlign: "justify", marginBottom: "57px" }} >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                    <Button style={"black"} title={"Learn more"} />
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
                        <Button style={"white"} title={"Learn more"} />
                    </div>
                    <RoundProgress style={"dark"} value={"90%"} title={"Clients statisfied"} />
                    <RoundProgress style={"dark"} value={"95%"} title={"Projects success"} />
                </div>
            </section>

            <section className={styles.advantages}>
                <div className={styles.advantages_content}>
                    <div className={styles.advantages_content_discription}>
                        <h2>Why us?</h2>
                        <table>
                            <tbody>
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
                            </tbody>
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
            <PortfolioSlider />

        </main>
    )
}

export default Home;