import React from "react";
import styles from "./Feedback.module.scss";
import star from "../../Assets/images/Feedback/star.png"
import fullstar from "../../Assets/images/Feedback/fullstar.png"

const Feedback = (props) => {
    let rank = [0, 0, 0, 0, 0];
    for ( let i = 0; i < props.rank; i++){
        rank[i] = 1;
    }
    return (
        <div className={styles.feedback}>
            <img src={props.photo} className={styles.photo} title="man"/>
            <h5 className={styles.name}>{props.name}</h5>
            <p className={styles.position}>{props.position}</p>
            <ul>
                {rank.map(item => item ? <li><img src={fullstar}/></li> : <li><img src={star}/></li>)}
            </ul>
            <p className={styles.comment}>{props.comment}</p>
        </div>
    )
}

export default Feedback;