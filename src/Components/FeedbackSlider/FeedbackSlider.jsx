import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./FeedbackSlider.scss";
import feedbackPhoto1 from "../../Assets/images/Feedback/4.jpg"
import Feedback from "../Feedback/Feedback";

const FeedbackSlider = () => {
        const feedbacks = [{ rank: 3, photo: feedbackPhoto1, name: "Brigita Mendez", position: "Conracter", comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution." },
                        { rank: 3, photo: feedbackPhoto1, name: "Brigita Mendez", position: "Conracter", comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution." },
                        { rank: 3, photo: feedbackPhoto1, name: "Brigita Mendez", position: "Conracter", comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution." },
                        { rank: 3, photo: feedbackPhoto1, name: "Brigita Mendez", position: "Conracter", comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution." },
                        { rank: 3, photo: feedbackPhoto1, name: "Brigita Mendez", position: "Conracter", comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution." },
                        { rank: 3, photo: feedbackPhoto1, name: "Brigita Mendez", position: "Conracter", comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution." }]
        return (
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
        )
}


export default FeedbackSlider;