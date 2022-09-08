import React from 'react'
import LOGO from "../../assets/logo.svg";
import styles from "./Header.module.css";
import {FaHamburger} from 'react-icons/fa';
import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import { Link } from "react-router-dom";


function Header() {

    const [hamburgerMenu, setHamburgerMenu] = useState(false)
    const showHamburgerMenu = () => {
        console.log(hamburgerMenu)
        setHamburgerMenu(!hamburgerMenu)
    }
  return (
    <header className={styles.header}>
       <Link to="/" className={styles.display} > <figure className={styles.logoBtn}>
             <img src={LOGO} alt="logo"  />
        </figure></ Link >
        <nav>
           <div>
              <FaHamburger className={styles.hamburgerIcon} onClick={showHamburgerMenu} />
           </div>
        </nav>
        <div className= {hamburgerMenu ? styles.active : styles.hamburgerMenu}  >
            <ul className={styles.hamburgerMenuItems} onClick={showHamburgerMenu} >
                <li className={styles.menuItems}>option1</li>
                <li>option2</li>
                <li>option3</li>
            </ul>
        </div>
    </header>
  )
}

export default Header