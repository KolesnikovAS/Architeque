import React from "react";
import styles from "./About.module.scss"
import PageTitle from "../../Containers/PageTitle/PageTitle";
import Value from "../../Components/Value/Value";
import Stuff from "../../Components/Stuff/Stuff";
import Button from "../../Components/Button/Button";
import Post from "../../Components/Post/Post";
import Progress from "../../Components/Progress/Progress";
import PuzzleItem from "../../Components/PuzzleItem/PuzzleItem";
import images from "./AboutImages"


const About = () => {
    const values = [{ icon: images.valueIcon1, number: "6385", title: "Project Success" },
                    { icon: images.valueIcon2, number: "159", title: "Project Teams" },
                    { icon: images.valueIcon3, number: "589", title: "Win Awards" },
                    { icon: images.valueIcon4, number: "1596", title: "Customer Happy" }];
    const stuff = [{ photo: images.stuffPhoto1, name: "Sarah Doe", position: "Interior Designer" },
                    { photo: images.stuffPhoto2, name: "John Doe", position: "Architect Building" },
                    { photo: images.stuffPhoto3, name: "Smith Doe", position: "Architect Landscape" }];
    const results = [{ title: "Design", value: "90" },
                    { title: "Concept", value: "80" },
                    { title: "Deadline", value: "95" },
                    { title: "Result", value: "85" }]
    const puzzleItems = [{ image: images.puzzleImage1, size: "48%", title: "View services" },
                        { image: images.puzzleImage2, size: "48%", title: "View teams" },
                        { image: images.puzzleImage3, size: "100%", title: "View portfolio" }]
    return (
        <main>
            <PageTitle title={"About"} />

            <section className={styles.skills}>
                <div className={styles.skills_content}>
                    <img src={images.skillsImage} alt="building" />
                    <div className={styles.skills_discription}>
                        <h2>Company skills</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                        {results.map(({title, value}, index) =>
                            <Progress key={index} title={title} value={value} />)}
                    </div>
                </div>
            </section>

            <section className={styles.values}>
                <div className={styles.values_content}>
                    {values.map(({icon, number, title}, index) =>
                        <Value key={index} icon={icon} number={number} title={title} />)}
                </div>
            </section>

            <section className={styles.teams}>
                <div className={styles.teams_content}>
                    <h1>Experts Teams</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                    <ul>
                        {stuff.map(({photo, name, position}, index) =>
                            <li key={index}><Stuff photo={photo} name={name} position={position} /></li>)}
                    </ul>
                </div>
            </section>

            <section className={styles.puzzle}>
                <div className={styles.puzzle_content}>
                    {puzzleItems.map(({image, size, title}, index) =>
                        <PuzzleItem key={index} image={image} size={size} title={title} />)}
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
                        <Post image={images.postImage1} title={"Lorem ipsum dolor sit"} discription={"Reader will be distracted by the readable content"} />
                        <Post image={images.postImage2} title={"Lorem ipsum dolor sit"} discription={"Reader will be distracted by the readable content"} />
                    </div>
                </div>
            </section>

        </main>
    )
}

export default About;