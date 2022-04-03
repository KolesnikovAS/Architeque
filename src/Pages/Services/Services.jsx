import React from "react";
import PageTitle from "../../Containers/PageTitle/PageTitle";
import styles from "./Services.module.scss"
import reasonsBG from "../../Assets/images/Home/portfolioslide2.jpg"
import Offer from "../../Components/offer/Offer";
import statisticsImage from "../../Assets/images/Home/advantages.jpg"
import Button from "../../Components/button/Button"

const Services = () => {
    return (
        <main>
            <PageTitle title={"Services"} />

            <section className={styles.reasons}>
                <div className={styles.reasons_content}>
                    <img src={reasonsBG} alt="building"/>
                    <div className={styles.reasons_value}>
                        <h1>The reasons</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <table>
                            <tr>
                                <td><h2>6385</h2><span>Project Success</span></td>
                                <td><h2>589</h2><span>Win Awards</span></td>
                            </tr>
                            <tr>
                                <td><h2>159</h2><span>Project Teams</span></td>
                                <td><h2>1596</h2><span>Customer Happy</span></td>
                            </tr>
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
                        <table>
                            <tr>
                                <td><span>90%</span><p>Clients Statisfied</p></td>
                                <td><span>95%</span><p>Projects Success</p></td>
                            </tr>
                            <tr>
                                <td><span>85%</span><p>Client Trust</p></td>
                                <td><span>95%</span><p>Design Functiinality</p></td>
                            </tr>
                        </table>
                        <p className={styles.notes}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <img className={styles.statstics_image} src={statisticsImage} alt="design" />
                </div>
            </section>

            <section className={styles.order}>
                <div className={styles.order_content}>
                    <h1>Get service now</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                    <Button style={"white"} title={"Contact Us"}/>
                </div>
            </section>

        </main>
    )
}

export default Services;