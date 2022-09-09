import React from 'react'
import Header from '../../components/Header/Header';
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import styles from "./ViewStatements.module.css";
import { useLocation } from "react-router-dom";
import FcAddDatabase from "react-icons/fc"
import {FcPlus} from 'react-icons/fc';
import {FcDocument} from "react-icons/fc";
import {FcRemoveImage} from "react-icons/fc";
import { useParams } from 'react-router-dom';
function ViewStatements(props) {

//    console.log(props.statement)
      const {statement, handleEdit, handleDelete, handleShowStatement} = props
    //   const {id} = useParams()
    //   console.log(id)
    //   const{statementName, _id} = props.statement.statements
    //   console.log(statementName)
//       function handleEdit(id){
//         console.log(id)
//         const statementToEdit = props.statement.statements.find(statement => statement._id === id)
//         console.log(statementToEdit)

//         props.setStatement(prevState => ({
//             ...prevState,
//             statement: statementToEdit,
//             editMode: true
//         }))
//     }

//    async function handleDelete(id){
//         const statements = await fetch(`http://localhost:3001/api/statements/${id}`, {
//             method : "DELETE"
//         }).then(res=> res.json())
//         props.setStatement(prevState=> ({
//             ...prevState,
//             statements
//         }))
//     }
   
  return (
    
    <>
    {/* <section>
    <Header />
    </section> */}
   {/* {console.log(statement.statements)}   */}
  
   <section className={styles.container}>
   <Link to="/CreateProposal" ><div className={styles.links}><FcPlus style={{height:"40px",width:"50px"}} /></div></Link>
    <article className={styles.cards}>
     {props.statement.statements ?
     
    props.statement.statements.map((s,i) => (
        <>
        // 
    <Link to={`/viewStatements/${s._id}`} className={styles.statementLink} key={i} >
        <figure className={styles.card} onClick={()=> handleShowStatement(s._id)}>
                <article className={styles.innerCard} ><h3 className={styles.fonts}>Statement Name : </h3><h3> {s.statementName}</h3></article>
                <article className={styles.innerCard} > <h3>Total: </h3><h3>{s.volume}</h3></article>
                <article className={styles.innerCard}> <h3>Transactions Numbers: </h3><h3>{s.transactionsNumber}</h3> </article>   
                <article className={styles.innerCard}><h3>Current Fee: </h3> <h3>{s.fees}</h3> </article>  
                
        </figure>
        
    </Link>

        <div className={styles.icons} key={s._id}>
                    <div onClick={()=> handleEdit(s._id)}><FcDocument style={{width:"50px", height:"30px"}}/><span></span></div> 
                    <div onClick={()=> handleDelete(s._id)} ><FcRemoveImage style={{width:"50px", height:"30px"}}/></div> 
                </div>


    
                </>
                )) : <div>nothing</div>}

   </article>
   </section>
    </>
  )
}

export default ViewStatements;









 // const [statement, setStatement] = useState({
    //     statementName: "fasfas",
    //     volume: "dsadas",
    //     fees:"dasda",
    //     transactionsNumber: "dsds",
    
    //   })
//     const location = useLocation();
//     console.log(props, " props");
//     console.log(location.state, " useLocation Hook");
//       const data = location.state?.data;
//     console.log(data, "prop");
//     console.log(location);
// console.log(location.state.statement.statements,"tfadjadsfk")
// const {statementName, volume, fees, transactionsNumber} = location.state.statement.statements
// console.log(statementName)
    // useEffect(() => {
    //     async function getAppData(){
    //         const statements = await fetch("http://localhost:3001/api/statements")
    //          .then(res => res.json())
             
    //          setStatement(prevState =>({
    //            ...prevState,
    //            statements
    //          }))
    //         //    setStatement({statements})
    
           
    //        }
           
    //     getAppData()
    
    //   },[])
