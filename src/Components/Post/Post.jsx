import React from "react";
import styles from "./Post.module.scss"


const Post = (props) => {
    return (
        <div className={styles.post}>
            <img className={styles.image} src={props.image}/>
            <h5 className={styles.title}>{props.title}</h5>
            <p className={styles.discription}>{props.discription}</p>
            <button><span>read more</span><div></div></button>
        </div>
    )
}

export default Post