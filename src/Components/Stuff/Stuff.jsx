import React from "react";
import styles from "./Stuff.module.scss"


const Stuff = (props) => {
    return (
        <div className={styles.stuff}>
            <img className={styles.photo} src={props.photo} title="stuff member" />
            <h5 className={styles.name}>{props.name}</h5>
            <p className={styles.position}>{props.position}</p>
        </div>
    )
}

export default Stuff;