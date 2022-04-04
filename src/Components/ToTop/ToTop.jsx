import React from "react";
import styles from "./ToTop.module.scss"

const ToTop = (props) => {
    return (
        <div onClick={props.toTop} className={styles.to_top}>
            <div className={styles.to_top_arrow}></div>
        </div>
    )
}

export default ToTop;