import React from "react";
import styles from "./Stuff.module.scss"


const Stuff = (props) => {
    return (
        <div className={styles.stuff}>
            <img src={props.photo} title="stuff member" />
            <h5>{props.name}</h5>
            <p>{props.position}</p>
        </div>
    )
}

export default Stuff;