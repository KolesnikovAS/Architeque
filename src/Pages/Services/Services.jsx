import React from "react";
import styles from "./Services.module.scss"
import reasonsBG from "../../Assets/images/PortfolioSlider/portfolioslide2.jpg"
import Offer from "../../Components/Offer/Offer";
import statisticsImage from "../../Assets/images/Home/advantages.jpg"
import Button from "../../Components/Button/Button"
import RoundProgress from "../../Components/RoundProgress/RoundProgress";

const Services = () => {
    const values = [{ value: "60%", title: "Clients Statisfied" },
                    { value: "70%", title: "Projects Success" },
                    { value: "80%", title: "Client Trust" },
                    { value: "90%", title: "Design Functiinality" }];
    const offers = ["Interior Designs", "Interior Designs", "Interior Designs"];
    const reasons = [{ value: "6385", text: "Project Success" },
                    { value: "589", text: "Win Awards" },
                    { value: "159", text: "Project Teams" },
                    { value: "1596", text: "Customer Happy" }]
    return (
        <main>

            <section className={styles.reasons}>
                <div className={styles.reasons_content}>
                    <img src={reasonsBG} alt="building" />
                    <div className={styles.reasons_value}>
                        <h1>The reasons</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <ul>
                            {reasons.map(({value, text}, item) =>
                                <li key={item}><h2>{value}</h2><span>{text}</span></li>)}
                        </ul>
                    </div>
                </div>
            </section>

            <section className={styles.offers}>
                <div className={styles.offers_content}>
                    <h1>Focus Sevices</h1>
                    <p className={styles.offers_disciption}>It is a long established fact that a reader will be distracted.</p>
                    <div className={styles.offers_container}>
                        {offers.map((item, index) =>
                            <Offer key={index} style={"gray"} title={item} discription={"It is a long established fact that a reader will be distracted by the readable content."} />)}
                    </div>
                </div>
            </section>

            <section className={styles.statistics}>
                <div className={styles.statistics_content}>
                    <div className={styles.statistics_discription}>
                        <h2>Services statistics</h2>
                        <div className={styles.statistics_container}>
                            {values.map(({ value, title }, index) =>
                                <RoundProgress key={index} style={"light"} value={value} title={title} />)}
                        </div>
                        <p className={styles.notes}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <img className={styles.statstics_image} src={statisticsImage} alt="design" />
                </div>
            </section>

            <section className={styles.order}>
                <div className={styles.order_content}>
                    <h1>Get service now</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                    <Button style={"white"} title={"Contact Us"} />
                </div>
            </section>

        </main>
    )
}

export default Services;