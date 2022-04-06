import React from "react";
import styles from "./Feedback.module.scss";
import star from "../../Assets/images/Feedback/star.png"
import fullstar from "../../Assets/images/Feedback/fullstar.png"

const Feedback = ({ rank, photo, name, position, comment }) => {
    let rating = [0, 0, 0, 0, 0];
    for (let i = 0; i < rank; i++) {
        rating[i] = 1;
    }
    return (
        <div className={styles.feedback}>
            <img src={photo} className={styles.photo} alt="man" />
            <h5>{name}</h5>
            <span>{position}</span>
            <ul>
                {rating.map((item, index) =>
                    <li key={index}><img alt="star" src={item ? fullstar : star} /></li>)}
            </ul>
            <p>{comment}</p>
        </div>
    )
}

export default Feedback;