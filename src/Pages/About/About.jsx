import React from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import styles from "./About.module.scss"
import skillsImg from "../../Assets/images/About/skills.jpg"

const About = () => {
    return (
        <main>
            <PageTitle title={"About"}/>
            <section className={styles.skills}>
                <div className={styles.skills_content}>
                    <img src={skillsImg} alt="building"/>
                    <div className={styles.skills_discription}>
                        <h2>Company skills</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                        <h5><span>Design</span><b>90%</b></h5>
                        <div className={styles.design_value}></div>
                        <h5><span>Concept</span><b>80%</b></h5>
                        <div className={styles.concept_value}></div>
                        <h5><span>Deadline</span><b>95%</b></h5>
                        <div className={styles.deadline_value}></div>
                        <h5><span>Result</span><b>85%</b></h5>
                        <div className={styles.result_value}></div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About;