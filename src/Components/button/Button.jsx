import React from "react";
import styles from "./Button.module.scss"
import PropTypes from 'prop-types';

const Button = ({style, title}) => {
    return (
        <button className={`${styles.button} ${styles[style]}`}>
            {title}
        </button>
    )
}

Button.propTypes = {
    style: PropTypes.oneOf(['black', 'white']),
};
Button.defaultProps = {
    style: 'white',
};

export default Button;