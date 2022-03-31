import React from "react";
import styles from "./PageTitle.module.scss"

const PageTitle = (props) => {
    return (
        <section className={styles.page_title}>
            <div className={styles.page_title_content}>
                <h3>{props.title}</h3>
            </div>
        </section>
    )
}

export default PageTitle