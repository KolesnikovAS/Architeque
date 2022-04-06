import React from "react";
import styles from "./Stuff.module.scss"


const Stuff = ({photo, name, position}) => {
    return (
        <div className={styles.stuff}>
            <img className={styles.photo} src={photo} title="stuff member" />
            <h5 className={styles.name}>{name}</h5>
            <p className={styles.position}>{position}</p>
        </div>
    )
}

export default Stuff;