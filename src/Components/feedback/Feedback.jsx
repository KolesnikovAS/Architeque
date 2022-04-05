import React from "react";
import styles from "./Feedback.module.scss";
import star from "../../Assets/images/Feedback/star.png"
import fullstar from "../../Assets/images/Feedback/fullstar.png"

const Feedback = ({rank, photo, name, position, comment}) => {
    let rating = [0, 0, 0, 0, 0];
    for ( let i = 0; i < rank; i++){
        rating[i] = 1;
    }
    return (
        <div className={styles.feedback}>
            <img src={photo} className={styles.photo} title="man"/>
            <h5 className={styles.name}>{name}</h5>
            <p className={styles.position}>{position}</p>
            <ul>
                {rating.map((item, index) => <li key={index}><img src={ (item ? fullstar : star)}/></li>)}
            </ul>
            <p className={styles.comment}>{comment}</p>
        </div>
    )
}

export default Feedback;