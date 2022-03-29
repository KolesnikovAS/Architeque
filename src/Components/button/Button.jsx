import React from "react";
import styles from "./Button.module.scss"

const Button = (props) => {
    return (
        <button style={{backgroundColor: props.backgroundColor, 
        color: props.color,
        border: props.border}} className={styles.button}>
            {props.children}
        </button>
    )
}

export default Button;