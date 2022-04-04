import React from "react";
import styles from "./Value.module.scss"


const Value = (props) => {
    return (
        <div className={styles.value}>
            <img src={props.icon} alt="icon" />
            <h2>{props.number}</h2>
            <p>{props.title}</p>
        </div>
    )
}

export default Value;
