import React from 'react'
import styles from "./Congrats.module.scss";
import congrats from "../../assets/congrats.jpg";
const Congrats = () => {
    return (
        <div className={styles.congrats}>
            <div className={styles.title}>
                <h2>Наши дорогие девочки!</h2>
                <p>Пусть этот день будет наполнен радостью и любовью!</p>

            </div>
            <img src={congrats} alt="8 of march" />

        </div>
    )
}

export default Congrats