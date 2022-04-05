import React from "react";
import styles from "./Input.module.scss"
import PropTypes from 'prop-types';

const Input = ({style, size, placeholder, type, name, handleChange, handleBlur, value, errors, touched}) => {
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

export default Input;

Input.propTypes = {
    style: PropTypes.oneOf(['dark', 'light']),
    size: PropTypes.oneOf(['small', 'big'])
};
Input.defaultProps = {
    style: 'light',
    size: 'big'
};