import React from "react";
import styles from "./RoundProgress.module.scss"
import PropTypes from 'prop-types';

const RoundProgress = ({ style, value, title }) => {
    
    let long = (2 * 3.15 * 52) * value.slice(0, -1) / 100;
    return (
        <div className={styles.round_progress}>
            <span>{value}</span>
            <svg className={styles[style]}>
                <circle stroke-dashoffset="0" stroke-dasharray={long} x cx="55" cy="55" r="52"></circle>
                <circle stroke-dashoffset={-long} stroke-dasharray={long} cx="55" cy="55" r="52"></circle>
            </svg>
            <p>{title}</p>
        </div>
    )
}

RoundProgress.propTypes = {
    style: PropTypes.oneOf(['dark', 'light']),
};
RoundProgress.defaultProps = {
    style: 'dark',
};

export default RoundProgress;