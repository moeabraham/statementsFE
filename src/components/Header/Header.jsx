import React from 'react'
import LOGO from "../../assets/logo.svg";
import styles from "./Header.module.css";
import {FaHamburger} from 'react-icons/fa';
import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import { Link } from "react-router-dom";

import {login, logout} from "../../services/firebase";

function Header(props) {

    const [hamburgerMenu, setHamburgerMenu] = useState(false)
    const showHamburgerMenu = () => {
        setHamburgerMenu(!hamburgerMenu)
    }

    console.log(props.userState.user)

  return (
    <header className={styles.header}>

                    
                        <Link to="/" className={styles.display} > <figure className={styles.logoBtn}>
             <img src={LOGO} alt="logo"  />
        </figure></ Link >
        <nav>
        <div className={styles.firebaseInfo}>
        {
                        props.userState.user ? 
                        <>
                        {console.log(props.userState.user.displayName)}
                        
                        <ul className={styles.firebaseContent}> <li>Welcome, {props.userState.user.displayName}</li> 
                        <li>

                            <img src={props.userState.user.photoURL} style={{ height: "2.8rem", borderRadius: "50%"}}/> 
                     
                       

             
                       </li>
                        <li 
                            className={styles.navLink}
                            onClick={logout}
    
                        >Logout</li> </ul>
                        </>
                        :
                        <ul>
                        <li 
                        className={styles.navLink}
                       onClick={login}

                   >Login</li> </ul>
                   
                    }   
                    </div>
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