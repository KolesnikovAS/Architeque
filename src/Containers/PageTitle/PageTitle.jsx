import React from "react";
import styles from "./PageTitle.module.scss"
import { useLocation } from "react-router-dom";

const PageTitle = () => {
    let { pathname } = useLocation();
    return pathname === "/" ? null : (<section className={styles.page_title}>
        <div className={styles.page_title_content}>
            <h3>{pathname.slice(1)}</h3>
        </div>
    </section>)

}

export default PageTitle