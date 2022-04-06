import React from "react";
import styles from "./Post.module.scss"


const Post = ({image, title, discription}) => {
    return (
        <div className={styles.post}>
            <img src={image} alt="design"/>
            <h5>{title}</h5>
            <p>{discription}</p>
            <button>read more</button>
        </div>
    )
}

export default Post