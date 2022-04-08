import React from "react";
import styles from "./RoundProgress.module.scss"
import PropTypes from 'prop-types';

const RoundProgress = ({ style, value, title }) => {
    const fullProgress = 2 * 3.15 * 52;
    const progress = (2 * 3.15 * 52) * value.slice(0, -1) / 100;
    return (
        <div className={styles.round_progress}>
            <div>
                <span>{value}</span>
                <svg className={styles[style]}>
                    <circle cx="55" cy="55" r="52"></circle>
                    <circle strokeDashoffset={fullProgress - progress} strokeDasharray={fullProgress} cx="55" cy="55" r="52"></circle>
                </svg>
            </div>
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