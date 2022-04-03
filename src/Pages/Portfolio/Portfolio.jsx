import React from "react";
import PageTitle from "../../Containers/PageTitle/PageTitle";
import Banner from "../../Containers/banner/Banner"
import styles from "./Portfolio.module.scss"
import portfolioImage1 from "../../Assets/images/Portfolio/1.jpg"
import portfolioImage2 from "../../Assets/images/Portfolio/2.jpg"
import portfolioImage3 from "../../Assets/images/Portfolio/3.jpg"
import portfolioImage4 from "../../Assets/images/Portfolio/4.jpg"
import portfolioImage5 from "../../Assets/images/Portfolio/5.jpg"
import portfolioImage6 from "../../Assets/images/Portfolio/6.jpg"
import portfolioImage7 from "../../Assets/images/Portfolio/7.jpg"
import portfolioImage8 from "../../Assets/images/Portfolio/8.jpg"
import portfolioImage9 from "../../Assets/images/Portfolio/9.jpg"


const Portfolio = () => {
    return (
        <main>
            <PageTitle title={"Portfolio"} />

            <section className={styles.portfolio}>
                <div className={styles.portfolio_content}>
                    <img src={portfolioImage1} alt="building" />
                    <img src={portfolioImage2} alt="building" />
                    <img src={portfolioImage3} alt="building" />
                    <img src={portfolioImage4} alt="building" />
                    <img src={portfolioImage5} alt="building" />
                    <img src={portfolioImage6} alt="building" />
                    <img src={portfolioImage7} alt="building" />
                    <img src={portfolioImage8} alt="building" />
                    <img src={portfolioImage9} alt="building" />
                </div>
            </section>

            <Banner />
        </main>
    )
}

export default Portfolio;