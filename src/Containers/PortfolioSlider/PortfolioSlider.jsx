import React, { useEffect, useState } from "react";
import { useWindowSize } from 'react-use';
import portfolioImage1 from "../../Assets/images/PortfolioSlider/portfolioslide1.jpg";
import portfolioImage2 from "../../Assets/images/PortfolioSlider/portfolioslide2.jpg";
import portfolioImage3 from "../../Assets/images/PortfolioSlider/portfolioslide3.jpg";
import portfolioImage4 from "../../Assets/images/PortfolioSlider/portfolioslide4.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from "./PortfolioSlider.module.scss";
import "./PortfolioSlider.scss";

const PortfolioSlider = () => {
    let [setNavigation, changeNavigation] = useState(true);
    let [showSlides, changeShowSlides] = useState(4);
    let { width } = useWindowSize();
    useEffect(() => {
        if (width < 600) {
            changeNavigation(false);
        } else changeNavigation(true);
        if (width < 1000) {
            changeShowSlides(1);
        } else if (width > 1000 && width < 1450) {
            changeShowSlides(2);
        } else if (width > 1450 && width < 1920) {
            changeShowSlides(3);
        } else {
            changeShowSlides(4);
        }
    }, [width]);
    const slides = [portfolioImage1, portfolioImage2, portfolioImage3, portfolioImage4, portfolioImage1,
        portfolioImage2, portfolioImage3, portfolioImage4, portfolioImage1, portfolioImage2];

    return (
        <section className={styles.portfolio}>
            <Swiper
                className="portfolio_slider"
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={showSlides}
                pagination={{ clickable: true }}
                navigation={setNavigation}
            >
                {slides.map((item, index) =>
                    <SwiperSlide key={index}><img src={item} alt="building" /></SwiperSlide>)}
            </Swiper>
        </section >
    )
}

export default PortfolioSlider;