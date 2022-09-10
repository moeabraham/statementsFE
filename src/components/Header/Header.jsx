import React from 'react'
import LOGO from "../../assets/logo.svg";
import styles from "./Header.module.css";
import {FaHamburger} from 'react-icons/fa';
import {FcPrevious} from 'react-icons/fc'
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
             <img className={styles.displayLogo} src={LOGO} alt="logo"  />
        </figure></ Link >
        <nav>
        <div className={styles.firebaseInfo}>
        {
                        props.userState.user ? 
                        <>
                        {console.log(props.userState.user.displayName)}
                        
                        <ul className={styles.firebaseContent}> <li className={styles.navLink}>Hi, {props.userState.user.displayName}</li> 
                        <li className={styles.navLink} >

                            <img className={styles.displayImg} src={props.userState.user.photoURL} style={{ height: "2.8rem", borderRadius: "50%"}}/> 
                     
                       

             
                       </li >
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
<div>         
</div>
            <ul className={styles.hamburgerMenuItems} onClick={showHamburgerMenu} >
                <li><FcPrevious className={styles.previousBtn} /></li>
              <Link to='/'>  <li className={styles.menuItems}>Home</li></Link> 
              <Link to='/ViewStatements'>  <li className={styles.menuItems}>View Statements</li></Link> 
              <Link to='/CreateProposal'>  <li className={styles.menuItems}>Create a Proposal</li></Link> 
            </ul>
        </div>

    </header>
  )
}

export default Header