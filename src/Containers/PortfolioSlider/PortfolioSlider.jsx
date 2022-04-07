import React from "react";
import portfolioImage1 from "../../Assets/images/PortfolioSlider/portfolioslide1.jpg";
import portfolioImage2 from "../../Assets/images/PortfolioSlider/portfolioslide2.jpg";
import portfolioImage3 from "../../Assets/images/PortfolioSlider/portfolioslide3.jpg";
import portfolioImage4 from "../../Assets/images/PortfolioSlider/portfolioslide4.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from "./PortfolioSlider.module.scss";

const PortfolioSlider = () => {
    const slides = [portfolioImage1, portfolioImage2, portfolioImage3, portfolioImage4, portfolioImage1,
        portfolioImage2, portfolioImage3, portfolioImage4, portfolioImage1, portfolioImage2];

    return (
        <section className={styles.portfolio}>
            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
            >
                {slides.map((item, index) =>
                    <SwiperSlide key={index}><img src={item} alt="building" /></SwiperSlide>)}
            </Swiper>
        </section >
    )
}

export default PortfolioSlider;