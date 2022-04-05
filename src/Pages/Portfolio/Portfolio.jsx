import React from "react";
import PageTitle from "../../Containers/PageTitle/PageTitle";
import Banner from "../../Containers/Banner/Banner"
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
    const images = [portfolioImage1, portfolioImage2, portfolioImage3, portfolioImage4, portfolioImage5,
        portfolioImage6, portfolioImage7, portfolioImage8, portfolioImage9]
    return (
        <main>
            <PageTitle title={"Portfolio"} />

            <section className={styles.portfolio}>
                <div className={styles.portfolio_content}>
                    {images.map((item, index) => <img key={index} src={item} alt="building" />)}
                </div>
            </section>

            <Banner />
        </main>
    )
}

export default Portfolio;