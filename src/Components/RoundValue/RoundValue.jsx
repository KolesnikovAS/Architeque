import React from "react";
import styles from "./RoundValue.module.scss"
import PropTypes from 'prop-types';

const RoundValue = ({style, value, title}) => {
    return (
        <div className={styles.round_index}>
            <div className={styles[style]}>{value}</div>
            <p>{title}</p>
        </div>
    )
}

RoundValue.propTypes = {
    style: PropTypes.oneOf(['dark', 'light']),
};
RoundValue.defaultProps = {
    style: 'dark',
};

export default RoundValue;