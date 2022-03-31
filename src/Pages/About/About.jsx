import React from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import styles from "./About.module.scss"
import skillsImg from "../../Assets/images/About/skills.jpg"
import valueIcon1 from "../../Assets/images/About/icon1.png"
import valueIcon2 from "../../Assets/images/About/icon2.png"
import valueIcon3 from "../../Assets/images/About/icon3.png"
import valuesIcon4 from "../../Assets/images/About/icon4.png"
import Value from "../../Components/Value/Value";

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

            <section className={styles.values}>
                <div className={styles.values_content}>
                    <Value icon={valueIcon1} number={"6385"} title={"Project Success"} />
                    <Value icon={valueIcon1} number={"159"} title={"Project Teams"} />
                    <Value icon={valueIcon1} number={"589"} title={"Win Awards"} />
                    <Value icon={valueIcon1} number={"1596"} title={"Customer Happy"} />
                </div>
            </section>

            <section className={styles.teams}>
                <div className={styles.teams_content}>
                    
                </div>
            </section>
        </main>
    )
}

export default About;