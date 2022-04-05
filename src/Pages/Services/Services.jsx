import React from "react";
import PageTitle from "../../Containers/PageTitle/PageTitle";
import styles from "./Services.module.scss"
import reasonsBG from "../../Assets/images/PortfolioSlider/portfolioslide2.jpg"
import Offer from "../../Components/Offer/Offer";
import statisticsImage from "../../Assets/images/Home/advantages.jpg"
import Button from "../../Components/Button/Button"
import RoundValue from "../../Components/RoundValue/RoundValue";

const Services = () => {
    const values = [{value: "90%", title: "Clients Statisfied"},
    {value: "95%", title: "Projects Success"},
    {value: "85%", title: "Client Trust"},
    {value: "95%", title: "Design Functiinality"}];
    return (
        <main>
            <PageTitle title={"Services"} />

            <section className={styles.reasons}>
                <div className={styles.reasons_content}>
                    <img src={reasonsBG} alt="building" />
                    <div className={styles.reasons_value}>
                        <h1>The reasons</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td><h2>6385</h2><span>Project Success</span></td>
                                    <td><h2>589</h2><span>Win Awards</span></td>
                                </tr>
                                <tr>
                                    <td><h2>159</h2><span>Project Teams</span></td>
                                    <td><h2>1596</h2><span>Customer Happy</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className={styles.offers}>
                <div className={styles.offers_content}>
                    <h1>Focus Sevices</h1>
                    <p>It is a long established fact that a reader will be distracted.</p>
                    <div className={styles.offers_container}>
                        <Offer style={"gray"} title={"Interior Designs"} discription={"It is a long established fact that a reader will be distracted by the readable content."} />
                        <Offer style={"gray"} title={"Interior Designs"} discription={"It is a long established fact that a reader will be distracted by the readable content."} />
                        <Offer style={"gray"} title={"Interior Designs"} discription={"It is a long established fact that a reader will be distracted by the readable content."} />
                    </div>
                </div>
            </section>

            <section className={styles.statistics}>
                <div className={styles.statistics_content}>
                    <div className={styles.statistics_discription}>
                        <h2>Services statistics</h2>
                        <div className={styles.statistics_container}>
                            {values.map((item, index) => 
                                <RoundValue key={index} style={"light"} value={item.value} title={item.title} />)}
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