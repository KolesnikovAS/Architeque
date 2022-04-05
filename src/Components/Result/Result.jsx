import React from "react";
import styles from "./Result.module.scss"

const Result = ({ title, value }) => {
    return (
        <li className={styles.result}>
            <h5><span>{title}</span><b>{value}</b></h5>
            <div style={{width: value}} className={styles.design_value}></div>
        </li>
    )
}

export default Result;