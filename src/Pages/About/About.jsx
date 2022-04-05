import React from "react";
import PageTitle from "../../Containers/PageTitle/PageTitle";
import styles from "./About.module.scss"
import skillsImage from "../../Assets/images/About/skills.jpg"
import valueIcon1 from "../../Assets/images/About/icon1.png"
import valueIcon2 from "../../Assets/images/About/icon2.png"
import valueIcon3 from "../../Assets/images/About/icon3.png"
import valueIcon4 from "../../Assets/images/About/icon4.png"
import Value from "../../Components/Value/Value";
import stuffPhoto1 from "../../Assets/images/Stuff/1.jpg"
import stuffPhoto2 from "../../Assets/images/Stuff/2.jpg"
import stuffPhoto3 from "../../Assets/images/Stuff/3.jpg"
import Stuff from "../../Components/Stuff/Stuff";
import Button from "../../Components/Button/Button";
import Post from "../../Components/Post/Post";
import PostImage1 from "../../Assets/images/Post/post1.jpg"
import PostImage2 from "../../Assets/images/Post/post2.jpg"
import Progress from "../../Components/Progress/Progress";
import puzzleImage1 from "../../Assets/images/PuzzleItem/puzzle1.jpg"
import puzzleImage2 from "../../Assets/images/PuzzleItem/puzzle2.jpg"
import puzzleImage3 from "../../Assets/images/PuzzleItem/puzzle3.jpg"
import PuzzleItem from "../../Components/PuzzleItem/PuzzleItem";


const About = () => {
    const values = [{ icon: valueIcon1, number: "6385", title: "Project Success" },
    { icon: valueIcon2, number: "159", title: "Project Teams" },
    { icon: valueIcon3, number: "589", title: "Win Awards" },
    { icon: valueIcon4, number: "1596", title: "Customer Happy" }];
    const stuff = [{ photo: stuffPhoto1, name: "Sarah Doe", position: "Interior Designer" },
    { photo: stuffPhoto2, name: "John Doe", position: "Architect Building" },
    { photo: stuffPhoto3, name: "Smith Doe", position: "Architect Landscape" }];
    const results = [{ title: "Design", value: "90" },
    { title: "Concept", value: "80" },
    { title: "Deadline", value: "95" },
    { title: "Result", value: "85" }]
    const puzzleItems = [{ image: puzzleImage1, size: "48%" },
    { image: puzzleImage2, size: "48%" },
    { image: puzzleImage3, size: "100%" }]
    return (
        <main>
            <PageTitle title={"About"} />

            <section className={styles.skills}>
                <div className={styles.skills_content}>
                    <img src={skillsImage} alt="building" />
                    <div className={styles.skills_discription}>
                        <h2>Company skills</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                        {results.map((item, index) =>
                            <Progress key={index} title={item.title} value={item.value} />)}
                    </div>
                </div>
            </section>

            <section className={styles.values}>
                <div className={styles.values_content}>
                    {values.map((value, index) =>
                        <Value key={index} icon={value.icon} number={value.number} title={value.title} />)}
                </div>
            </section>

            <section className={styles.teams}>
                <div className={styles.teams_content}>
                    <h1>Experts Teams</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                    <ul>
                        {stuff.map((item, index) =>
                            <li key={index}><Stuff photo={item.photo} name={item.name} position={item.position} /></li>)}
                    </ul>
                </div>
            </section>

            <section className={styles.puzzle}>
                <div className={styles.puzzle_content}>
                    {puzzleItems.map((item, index) =>
                        <PuzzleItem key={index} image={item.image} size={item.size} />)}
                </div>
            </section>

            <section className={styles.blog}>
                <div className={styles.blog_content}>
                    <div className={styles.blog_discription}>
                        <h2>From the blog</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                        <Button style={"solid_black"} size={"big"} title="Learn More" />
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