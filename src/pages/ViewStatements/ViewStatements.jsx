import React from 'react'
import Header from '../../components/Header/Header';
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";

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
   {statement.statements ?
    statement.statements.map((s,i) => (
    <div>{s.statementName}</div>
   )) : <div>nothing</div>}
    </>
  )
}

export default ViewStatements