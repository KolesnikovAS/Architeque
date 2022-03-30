import React from "react";
import styles from "./Offer.module.scss"

const Offer = (props) => {
    return (
        <div className={styles.offer}>
            <h3>{props.title}</h3>
            <p>{props.discription}</p>
            <button><span>READ MORE</span><div></div></button>
        </div>
    )
}

export default Offer;