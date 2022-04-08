import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from "./PresentsSlider.module.scss";
import "./PresentsSlider.scss";
import slide1Img from "../../Assets/images/Home/slide1.jpg"

const PresentSlider = () => {
    const slides = [{ image: slide1Img, title: "Modern minimalist home", discription: "It is a long established fact that a reader will be distracted by the readable content of a page." },
                    { image: slide1Img, title: "Modern minimalist home", discription: "It is a long established fact that a reader will be distracted by the readable content of a page." },
                    { image: slide1Img, title: "Modern minimalist home", discription: "It is a long established fact that a reader will be distracted by the readable content of a page." },
                    { image: slide1Img, title: "Modern minimalist home", discription: "It is a long established fact that a reader will be distracted by the readable content of a page." },
                    { image: slide1Img, title: "Modern minimalist home", discription: "It is a long established fact that a reader will be distracted by the readable content of a page." }]
    return (
        <section className={styles.slider}>
            <Swiper
                className="presents"
                modules={[Navigation, Pagination, Autoplay]}
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                navigation
            >
                {slides.map(({ image, title, discription }, index) =>
                    <SwiperSlide key={index}>
                        <div className={styles.slider_content}>
                            <h1>{title}</h1>
                            <p>{discription}</p>
                        </div>
                        <img className={styles.slide_image} src={image} alt="design" />
                    </SwiperSlide>)}
            </Swiper>
        </section >
    )
}


export default PresentSlider;