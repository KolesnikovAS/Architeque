import React from "react";
import Banner from "../../Containers/Banner/Banner";
import styles from "./Teams.module.scss";
import Stuff from "../../Components/Stuff/Stuff"
import PortfolioSlider from "../../Containers/PortfolioSlider/PortfolioSlider";
import Feedback from "../../Components/Feedback/Feedback";
import images from "./TeamsImages"
import FeedbackSlider from "../../Components/FeedbackSlider/FeedbackSlider";

const Teams = () => {
    const stuff = [{photo: images.stuffPhoto1, name: "Sarah Doe", position: "Interior Designer"},
                {photo: images.stuffPhoto2, name: "John Doe", position: "Architect Building"},
                {photo: images.stuffPhoto3, name: "Smith Doe", position: "Architect Landscape"},
                {photo: images.stuffPhoto4, name: "Keylin Doe", position: "Project Manager"},
                {photo: images.stuffPhoto5, name: "Megan Doe", position: "Finace"},
                {photo: images.stuffPhoto6, name: "Sanchez Doe", position: "Legal"}];
    return (
        <main>
            <section className={styles.teams}>
                <div className={styles.teams_content}>
                    <h3>Meet our teams</h3>
                    <p className={styles.notes}>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                    <div className={styles.stuff_container}>
                        {stuff.map(({photo, name, position}, index) =>
                            <Stuff key={index} photo={photo} name={name} position={position} />)}
                    </div>
                </div>
            </section>
            
            <Banner />
            <PortfolioSlider />

            <section className={styles.feedback_slider}>
                <div className={styles.feedback_slider_content}>
                    <h2>What our client says</h2>
                    <p className={styles.notes}>It is a long established fact that a reader.</p>
                    <FeedbackSlider />
                </div>
            </section>
        </main>
    )
}

export default Teams;