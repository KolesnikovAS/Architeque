import React from "react";
import styles from "./Offer.module.scss"
import PropTypes from 'prop-types';

const Offer = ({style, title, discription}) => {

    return (
        <div className={`${styles.offer} ${styles[style]}`}>
            <h3>{title}</h3>
            <p>{discription}</p>
            <button className={styles[style]}>READ MORE</button>
        </div>
    )
}

Offer.propTypes = {
    style: PropTypes.oneOf(['gray', 'white']),
};
Offer.defaultProps = {
    style: 'white',
};

export default Offer;

