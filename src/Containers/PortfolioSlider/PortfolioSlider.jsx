import React from "react";
import portfolioImage1 from "../../Assets/images/PortfolioSlider/portfolioslide1.jpg";
import portfolioImage2 from "../../Assets/images/PortfolioSlider/portfolioslide2.jpg";
import portfolioImage3 from "../../Assets/images/PortfolioSlider/portfolioslide3.jpg";
import portfolioImage4 from "../../Assets/images/PortfolioSlider/portfolioslide4.jpg";
import styles from "./PortfolioSlider.module.scss"

const PortfolioSlider = () => {
    return (
        <section className={styles.portfolio}>
            <img src={portfolioImage1} alt="building" />
            <img src={portfolioImage2} alt="building" />
            <img src={portfolioImage3} alt="building" />
            <img src={portfolioImage4} alt="building" />
        </section>
    )
}

export default PortfolioSlider;