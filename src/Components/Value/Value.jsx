import React from "react";
import styles from "./Value.module.scss"


const Value = (props) => {
    return (
        <div className={styles.value}>
            <img src={props.icon} title="icon" />
            <h2>{props.number}</h2>
            <p>{props.title}</p>
        </div>
    )
}

export default Value;


// import PropTypes from 'prop-types';

// function App() {
//     return (
//         <Button
//             icon={
//                 <Icon type="helper" />
//             }
//         />
//     );
// }

// const Button = (size, style, title, icon) => {
//     return (
//         <button className={${styles[size]} ${styles[style]}}> { title || icon}</button >
//   )
// }

// Button.propTypes = {
//     size: PropTypes.oneOf(['small', 'big']),
//     style: PropTypes.oneOf(['black', 'white']),
//     title: PropTypes.string,
//     icon: PropTypes.node,
// };
// Button.defaultProps = {
//     size: 'small',
//     style: 'black',
// };

// export default Button;