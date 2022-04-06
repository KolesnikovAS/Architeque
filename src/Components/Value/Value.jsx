import React from "react";
import styles from "./Value.module.scss"


const Value = ({icon, number, title}) => {
    return (
        <div className={styles.value}>
            <img src={icon} alt="icon" />
            <h2>{number}</h2>
            <p>{title}</p>
        </div>
    )
}

export default Value;
