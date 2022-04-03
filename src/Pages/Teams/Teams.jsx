import React from "react";
import PageTitle from "../../Containers/PageTitle/PageTitle";
import Banner from "../../Containers/banner/Banner";
import styles from "./Teams.module.scss";
import Stuff from "../../Components/Stuff/Stuff"
import stuffPhoto1 from "../../Assets/images/Stuff/1.jpg";
import stuffPhoto2 from "../../Assets/images/Stuff/2.jpg";
import stuffPhoto3 from "../../Assets/images/Stuff/3.jpg";
import stuffPhoto4 from "../../Assets/images/Stuff/4.jpg";
import stuffPhoto5 from "../../Assets/images/Stuff/5.jpg";
import stuffPhoto6 from "../../Assets/images/Stuff/6.jpg";
import PortfolioSlider from "../../Containers/PortfolioSlider/PortfolioSlider";
import Feedback from "../../Components/feedback/Feedback";
import feedbackPhoto1 from "../../Assets/images/Feedback/4.jpg"



const Teams = () => {
    return (
        <main>
            <PageTitle title={"Teams"} />

            <section className={styles.teams}>
                <div className={styles.teams_content}>
                    <h3>Meet our teams</h3>
                    <p className={styles.notes}>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                    <div className={styles.stuff_container}>
                        <Stuff photo={stuffPhoto1} name={"Sarah Doe"} position={"Interior Designer"} />
                        <Stuff photo={stuffPhoto2} name={"John Doe"} position={"Architect Building"} />
                        <Stuff photo={stuffPhoto3} name={"Smith Doe"} position={"Architect landscape"} />
                        <Stuff photo={stuffPhoto4} name={"Keylin Doe"} position={"Project Manager"} />
                        <Stuff photo={stuffPhoto5} name={"Megan Doe"} position={"Finace"} />
                        <Stuff photo={stuffPhoto6} name={"Sanchez Doe"} position={"Legal"} />
                    </div>
                </div>
            </section>

            <Banner />
            <PortfolioSlider />

            <section className={styles.feedback_slider}>
                <div className={styles.feedback_slider_content}>
                    <h2>What our client says</h2>
                    <p className={styles.notes}>It is a long established fact that a reader.</p>
                    <Feedback rank={3} photo={feedbackPhoto1} name={"Brigita Mendez"} position={"Conracter"}
                        comment={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution."}/>
                </div>
            </section>
        </main>
    )
}

export default Teams;