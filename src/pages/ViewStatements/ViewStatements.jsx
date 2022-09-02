import React from 'react'
import Header from '../../components/Header/Header';
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import styles from "./ViewStatements.module.css";
function ViewStatements() {

    const [statement, setStatement] = useState({
        statementName: "fasfas",
        volume: "dsadas",
        fees:"dasda",
        transactionsNumber: "dsds",
    
      })
    

    useEffect(() => {
        async function getAppData(){
            const statements = await fetch("http://localhost:3001/api/statements")
             .then(res => res.json())
             
             setStatement(prevState =>({
               ...prevState,
               statements
             }))
            //    setStatement({statements})
    
           
           }
           
        getAppData()
    
      },[])
   
   
  return (
    <>
    
    <Header />
   {/* {console.log(statement.statements)}   */}
   <section className={styles.container}>
    <article className={styles.cards}>
   {statement.statements ?
    statement.statements.map((s,i) => (
    <figure className={styles.card} key={i}><h3> {s.statementName}</h3></figure>
   )) : <div>nothing</div>}
   </article>
   </section>
    </>
  )
}

export default ViewStatements