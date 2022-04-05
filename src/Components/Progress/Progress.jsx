import React from "react";
import styles from "./Progress.module.scss"

const Progress = ({ title, value }) => {
    return (
        <div className={styles.result}>
            <div><span>{title}</span><b>{`${value}%`}</b></div>
            <progress max="100" value={value} />
        </div>
    )
}

export default Progress;