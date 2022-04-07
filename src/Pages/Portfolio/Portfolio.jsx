import React from "react";
import Banner from "../../Containers/Banner/Banner"
import styles from "./Portfolio.module.scss"
import images from "./PortfolioImages"

const Portfolio = () => {

    return (
        <main>
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