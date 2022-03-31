import React from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import styles from "./About.module.scss"
import skillsImg from "../../Assets/images/About/skills.jpg"
import valueIcon1 from "../../Assets/images/About/icon1.png"
import valueIcon2 from "../../Assets/images/About/icon2.png"
import valueIcon3 from "../../Assets/images/About/icon3.png"
import valueIcon4 from "../../Assets/images/About/icon4.png"
import Value from "../../Components/Value/Value";
import stuffPhoto1 from "../../Assets/images/Stuff/1.jpg"
import stuffPhoto2 from "../../Assets/images/Stuff/2.jpg"
import stuffPhoto3 from "../../Assets/images/Stuff/3.jpg"
import Stuff from "../../Components/Stuff/Stuff";
import Button from "../../Components/button/Button";
import Post from "../../Components/Post/Post";
import PostImage1 from "../../Assets/images/Post/post1.jpg"
import PostImage2 from "../../Assets/images/Post/post2.jpg"


const About = () => {
    return (
        <main>
            <PageTitle title={"About"} />

            <section className={styles.skills}>
                <div className={styles.skills_content}>
                    <img src={skillsImg} alt="building" />
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
                    <Value icon={valueIcon2} number={"159"} title={"Project Teams"} />
                    <Value icon={valueIcon3} number={"589"} title={"Win Awards"} />
                    <Value icon={valueIcon4} number={"1596"} title={"Customer Happy"} />
                </div>
            </section>

            <section className={styles.teams}>
                <div className={styles.teams_content}>
                    <h1>Experts Team</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                    <ul>
                        <li><Stuff photo={stuffPhoto1} name={"Sarah Doe"} position={"Interior Designer"} /></li>
                        <li><Stuff photo={stuffPhoto2} name={"John Doe"} position={"Architect Building"} /></li>
                        <li><Stuff photo={stuffPhoto3} name={"Smith Doe"} position={"Architect landscape"} /></li>
                    </ul>
                </div>
            </section>

            <section className={styles.puzzle}>
                <div className={styles.puzzle_content}>
                    <div className={styles.puzzle_item}>
                        <Button border={"2px solid white"} color={"white"}>View Services</Button>
                    </div>
                    <div className={styles.puzzle_item}>
                        <Button border={"2px solid white"} color={"white"}>View Teams</Button>
                    </div>
                    <div className={styles.puzzle_line}>
                        <Button border={"2px solid white"} color={"white"}>View Portfolio</Button>
                    </div>
                </div>
            </section>

            <section className={styles.blog}>
                <div className={styles.blog_content}>
                    <div className={styles.blog_discription}>
                        <h2>From the blog</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                        <Button backgroundColor={"black"} color={"white"}>Learn More</Button>
                    </div>
                    <div className={styles.blog_posts}>
                        <Post image={PostImage1} title={"Lorem ipsum dolor sit"} discription={"Reader will be distracted by the readable content"} />
                        <Post image={PostImage2} title={"Lorem ipsum dolor sit"} discription={"Reader will be distracted by the readable content"} />
                    </div>
                </div>
            </section>

        </main>
    )
}

export default About;