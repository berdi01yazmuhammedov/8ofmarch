import React from 'react'
import headerLogo from "../../assets/header-logo.jpg";
import styles from "./Header.module.scss"
import { Link } from 'react-router';

const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <img className={styles.image} src={headerLogo} alt="HeaderLogo" />
                <h1>С 8 Марта, девочки!</h1>
                <Link to={"/"}>Я<span>змухаммедов</span>
                </Link>
            </div>
          
        </>
    )
}

export default Header