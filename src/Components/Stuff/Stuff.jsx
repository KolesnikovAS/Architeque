import React from "react";
import styles from "./Stuff.module.scss"


const Stuff = ({photo, name, position}) => {
    return (
        <div className={styles.stuff}>
            <img src={photo} alt="stuff member" />
            <h5>{name}</h5>
            <p>{position}</p>
        </div>
    )
}

export default Stuff;