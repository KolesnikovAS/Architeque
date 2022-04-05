import React from "react";
import styles from "./Input.module.scss"


export const Textarea = ({placeholder, type, name, handleChange, handleBlur, value, errors, touched}) => {
    return (
        <div className={styles.textarea_container}>
            <span className={styles.error}>{touched && errors}</span>
            <textarea
                className={touched && errors && styles.invalid}
                placeholder={placeholder}
                type={type}
                name={name}
                onChange={handleChange}
                onBlur={handleBlur}
                value={value} />
        </div>
    )
}

export default Textarea;