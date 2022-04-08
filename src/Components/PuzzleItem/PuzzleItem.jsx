import React from "react";
import styles from "./PuzzleItem.module.scss";
import Button from "../Button/Button";
import PropTypes from 'prop-types';

const PuzzleItem = ({image, size, title}) => {
    return (
        <div style={{backgroundImage: `url(${image})`}}  className={`${styles.puzzle_item} ${styles[size]}`}>
            <Button style={"white"} title={title} />
        </div>
    )
}

PuzzleItem.propTypes = {
    size: PropTypes.oneOf(['small', 'big']),
};
PuzzleItem.defaultProps = {
    style: 'big',
};

export default PuzzleItem;