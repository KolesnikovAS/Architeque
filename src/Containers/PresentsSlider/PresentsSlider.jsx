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
                <SwiperSlide>
                    <div className={styles.slider_content}>
                        <h1>Modern minimalist home</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                    </div>
                    <img className={styles.slide_image} src={slide1Img} alt="design" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slider_content}>
                        <h1>Modern minimalist home</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                    </div>
                    <img className={styles.slide_image} src={slide1Img} alt="design" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slider_content}>
                        <h1>Modern minimalist home</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                    </div>
                    <img className={styles.slide_image} src={slide1Img} alt="design" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.slider_content}>
                        <h1>Modern minimalist home</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                    </div>
                    <img className={styles.slide_image} src={slide1Img} alt="design" />
                </SwiperSlide>
            </Swiper>
        </section >
    )
}


export default PresentSlider;