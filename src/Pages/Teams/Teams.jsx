import React from "react";
import Banner from "../../Containers/Banner/Banner";
import styles from "./Teams.module.scss";
import Stuff from "../../Components/Stuff/Stuff"
import PortfolioSlider from "../../Containers/PortfolioSlider/PortfolioSlider";
import Feedback from "../../Components/Feedback/Feedback";
import images from "./TeamsImages"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./FeedbackSlider.scss";


const Teams = () => {
    const feedbacks = [{ rank: 3, photo: images.feedbackPhoto1, name: "Brigita Mendez", position: "Conracter", comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution." },
                    { rank: 3, photo: images.feedbackPhoto1, name: "Brigita Mendez", position: "Conracter", comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution." },
                    { rank: 3, photo: images.feedbackPhoto1, name: "Brigita Mendez", position: "Conracter", comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution." },
                    { rank: 3, photo: images.feedbackPhoto1, name: "Brigita Mendez", position: "Conracter", comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution." },
                    { rank: 3, photo: images.feedbackPhoto1, name: "Brigita Mendez", position: "Conracter", comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution." },
                    { rank: 3, photo: images.feedbackPhoto1, name: "Brigita Mendez", position: "Conracter", comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution." }]
    const stuff = [{ photo: images.stuffPhoto1, name: "Sarah Doe", position: "Interior Designer" },
                { photo: images.stuffPhoto2, name: "John Doe", position: "Architect Building" },
                { photo: images.stuffPhoto3, name: "Smith Doe", position: "Architect Landscape" },
                { photo: images.stuffPhoto4, name: "Keylin Doe", position: "Project Manager" },
                { photo: images.stuffPhoto5, name: "Megan Doe", position: "Finace" },
                { photo: images.stuffPhoto6, name: "Sanchez Doe", position: "Legal" }];
    return (
        <main>
            <section className={styles.teams}>
                <div className={styles.teams_content}>
                    <h3>Meet our teams</h3>
                    <p className={styles.notes}>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                    <div className={styles.stuff_container}>
                        {stuff.map(({ photo, name, position }, index) =>
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
                    <Swiper
                        className="feedback_slider"
                        modules={[Navigation, Pagination]}
                        pagination={{ clickable: true }}
                        spaceBetween={50}
                        centeredSlides={true}
                        slidesPerView={1}
                        navigation
                    >
                        {feedbacks.map(({ rank, photo, name, position, comment }, index) =>
                            <SwiperSlide key={index}>
                                <Feedback rank={rank} photo={photo} name={name} position={position}
                                    comment={comment} />
                            </SwiperSlide>)}
                    </Swiper>
                </div>
            </section>
        </main>
    )
}

export default Teams;