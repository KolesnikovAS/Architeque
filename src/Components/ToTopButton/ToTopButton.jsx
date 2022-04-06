import React from "react";
import styles from "./ToTopButton.module.scss"

const ToTopButton = () => {

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <button onClick={toTop} className={styles.to_top}>
            <div className={styles.to_top_arrow}></div>
        </button>
    )
}

export default ToTopButton;