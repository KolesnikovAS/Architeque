import React from "react";
import styles from "./Input.module.scss"
import PropTypes from 'prop-types';

export const Input = ({style, size, placeholder, type, name, handleChange, handleBlur, value, errors, touched}) => {
    return (
        <div className={styles.input_container}>
            <span className={styles.error}>{touched && errors}</span>
            <input
                className={`${styles[style]} ${styles[size]} ${touched && errors && styles.invalid}`}
                placeholder={placeholder}
                type={type}
                name={name}
                onChange={handleChange}
                onBlur={handleBlur}
                value={value} />
        </div>
    )
}

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


Input.propTypes = {
    style: PropTypes.oneOf(['dark', 'light']),
    size: PropTypes.oneOf(['small', 'big'])
};
Input.defaultProps = {
    style: 'light',
    size: 'big'
};