import React from "react";
import styles from "./PuzzleItem.module.scss";
import Button from "../Button/Button";

const PuzzleItem = ({image, size}) => {
    return (
        <div style={{backgroundImage: `url(${image})`, width: size}}  className={styles.puzzle_item}>
            <Button style={"white"} title={"View Services"} />
        </div>
    )
}

export default PuzzleItem;