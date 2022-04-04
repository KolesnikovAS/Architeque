import React from "react";
import styles from "./Button.module.scss"
import PropTypes from 'prop-types';

const Button = ({style, size, title}) => {
    return (
        <button className={`${styles.button} ${styles[style]} ${styles[size]}`}>
            {title}
        </button>
    )
}

Button.propTypes = {
    style: PropTypes.oneOf(['black', 'white', 'solid_black', 'solid_white']),
    size: PropTypes.oneOf(['small', 'medium', 'big'])
};
Button.defaultProps = {
    style: 'white',
    size: 'big'
};

export default Button;