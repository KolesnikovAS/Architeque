import React from "react";
import styles from "./Home.module.scss"
import Button from "../../Components/Button/Button";
import Offer from "../../Components/Offer/Offer"
import Banner from "../../Containers/Banner/Banner"
import PortfolioSlider from "../../Containers/PortfolioSlider/PortfolioSlider";
import RoundProgress from "../../Components/RoundProgress/RoundProgress";
import images from "./HomeImages"
import PresentSlider from "../../Containers/PresentsSlider/PresentsSlider";

const Home = () => {
    const offers = ["Interior Designs", "Building Designs", "Landscape Designs"];
    const advantages = ["Profesional works", "Best value solutions", "100% Guarantee", "High professional teams",
                    "Profesional teams", "Architecture licensed"];
    const partners = [{ icon: images.brendIcon1, name: "LOGOIPSUM" },
                    { icon: images.brendIcon2, name: "logoipsum" },
                    { icon: images.brendIcon3, name: "logoipsum" },
                    { icon: images.brendIcon4, name: "LOGOIPSUM" }];
    return (
        <main>
            <PresentSlider />
            
            <section className={styles.about}>
                <div className={styles.promo}>
                    <video src="#" controls="controls" poster={images.videoPoster} />
                    <ul>
                        {partners.map(({icon, name}, index) =>
                            <li key={index}><img src={icon} alt="brendicon" /><span>{name}</span></li>)}
                    </ul>
                </div>
                <div className={styles.discription}>
                    <h2>About</h2>
                    <p className={styles.text} >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                    <Button style={"black"} title={"Learn more"} />
                    <p className={styles.qoute} >"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution."</p>
                    <p className={styles.qoute_owner} >Ramones Aoky</p>
                    <p className={styles.owner_position} >CEO Company</p>
                </div>
            </section>

            <section className={styles.achievments}>
                <div className={styles.achievments_content}>
                    <div className={styles.achievments_title}>
                        <h1>Professional teams</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                        <Button style={"white"} title={"Learn more"} />
                    </div>
                    <RoundProgress style={"dark"} value={"70%"} title={"Clients statisfied"} />
                    <RoundProgress style={"dark"} value={"90%"} title={"Projects success"} />
                </div>
            </section>

            <section className={styles.advantages}>
                <div className={styles.advantages_content}>
                    <div className={styles.advantages_content_discription}>
                        <h2>Why us?</h2>
                        <ul>
                            {advantages.map((item, index) => 
                                <li key={index}>
                                    <img src={images.doubleCheck} alt="doublecheck" /><span>{item}</span>
                                </li>)}
                        </ul>
                        <p>We’re committed to delivering eye-catching architect designs</p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <img className={styles.advantages_content_image} src={images.advantagesImg} alt="design" />
                </div>
            </section>

            <section className={styles.services}>
                <div className={styles.services_content}>
                    <h1 className={styles.services_title}>Our Services</h1>
                    <p className={styles.services_discription}>It is a long established fact that a reader will be distracted.</p>
                    <div className={styles.offers_container}>
                        {offers.map((offer, index) => 
                            <Offer key={index} title={offer} discription={"It is a long established fact that a reader will be distracted by the readable content."} />)}    
                    </div>
                </div>
            </section>

            <Banner />
            <PortfolioSlider />
        </main>
    )
}

export default Home;