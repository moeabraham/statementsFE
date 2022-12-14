import React from 'react'
import Header from '../../components/Header/Header';
import { Link, useNavigate } from "react-router-dom";
import {FcPlus} from "react-icons/fc";
import {FcBriefcase} from "react-icons/fc";

import styles from "./CreateProposal.module.css";
import FcAddDatabase from "react-icons/fc"
// import {FcPlus} from 'react-icons/fc';
import {FcDocument} from "react-icons/fc";
import {FcRemoveImage} from "react-icons/fc";
import {useState} from 'react';
import {createStatement, updateStatement} from "../../services/ApiServices";

function CreateProposal(props) {
    const navigate = useNavigate();

        const{statement, setStatement, handleEdit, handleDelete, handleChange,handleSubmit, userState, setUserState, handleShowStatement} =  props
        const{ newStatement, statements, editMode,} = statement
// console.log(handleShowStatement)
    //    console.log(statement.statements[statements.length -1 ])
//   async  function handleSubmit(e){

//     e.preventDefault()
//     const {uid} = userState

//     if(editMode){
//         const{statementName, volume, fees, transactionsNumber,_id,merchantDebitFees,merchantCreditFees,debitPercentage,creditPercentage,debitInterchange, creditInterchange, basisPts,transactionFee,debitValue,creditValue   } =statement.newStatement
//        try{
//         // updateStatement(newStatement)
//         const editedStatements = await fetch(`https://statementsbe.herokuapp.com/api/statements/${_id}`,{
//             method:"PUT",
//             headers:{
//                 'Content-type' : "Application/json"
//             },
//             body:JSON.stringify(statement.newStatement)
//         }).then(res => res.json() )
        
       

//         setStatement(prevState=>({
//             ...prevState,
//            statements: editedStatements,
//             editMode: false,
//             newStatement:{
//                 statementName: "",volume: "",fees:"",transactionsNumber: "",
//                  debitCardVolume:"",debitInterchange:"", debitPercentage:"", merchantDebitFees: "",
//                  creditPercentage:"",creditInterchange:"",creditCardVolume:"",merchantCreditFees:"",
//                  basisPts:"",transactionFee:"",
//                  debitValue:"",creditValue:""
          
                
//             }
//         }))
//        } catch(err){
//         console.log(err)
//        }


//     } else {
//         try{
//             // createStatement(statement.newStatement)
//             const statementAdd = await fetch("https://statementsbe.herokuapp.com/api/statements",{
//                 method: "POST",
//                 headers:{
//                     "Content-type" : "Application/json"
//                 },
//                 body:JSON.stringify({...statement.newStatement, uid})
//             }).then(res=>res.json())

            

//             console.log(statementAdd)
//                 setStatement({
//                     statements:[...statement.statements, statementAdd],
//                     newStatement:{
//                         statementName: "",volume: "",fees:"",transactionsNumber: "",
//                          debitCardVolume:"",debitInterchange:"", debitPercentage:"", merchantDebitFees: "",
//                          creditPercentage:"",creditInterchange:"",creditCardVolume:"",  merchantCreditFees:"",

                      
//                         basisPts:"",transactionFee:"",    
//                         debitValue:"",creditValue:"",
//                     }
//                 })

//         } catch(err){
//             console.log(err)
//         }
//     }
    
//     }

  return (
    <>  
        {/* <Header /> */}
        <section className={styles.upperPage}>
            <Link  className={styles.statementLink} to="/ViewStatements">
                <article>
                    <FcBriefcase className={styles.links}  /> View Statements
                </article>
            </Link>
                <h1 className={styles.pageTitle}> Create a proposal</h1>
        </section>
        <section className={styles.formPage}>
            <form className={styles.form} onSubmit={handleSubmit}>

                <label className={styles.labels}>
                    Name
                    <input className={styles.inputs}  type="text" name="statementName" onChange={handleChange}  value={statement.newStatement.statementName}  />
                    {/* <input className={styles.inputs}  type="text" name="statementName" onChange={handleChange}  value={statement.newStatement.statementName}  /> */}

                </label>

                <label className={styles.labels}>
                    total volume
                    <input  className={styles.inputs} type="text" name="volume"  onChange={handleChange} value={statement.newStatement.volume} />
                    {/* <input className={styles.inputs}  type="text" name="statementName" onChange={handleChange}  value={statement.newStatement.statementName}  /> */}

                $
                </label>
               
                <label className={styles.labels}>
                    current fees
                    <input className={styles.inputs} placeholder="200 300.." type="text" name="fees" onChange={handleChange}  value={statement.newStatement.fees}   />
                    {/* <input className={styles.inputs}  type="text" name="statementName" onChange={handleChange}  value={statement.newStatement.statementName}  /> */}

                $
                </label>

                <label className={styles.labels}>
                    transaction number
                    <input className={styles.inputs} type="text" name="transactionsNumber"  onChange={handleChange}   value={statement.newStatement.transactionsNumber} />
                    {/* <input className={styles.inputs}  type="text" name="statementName" onChange={handleChange}  value={statement.newStatement.statementName}  /> */}

                </label>


                {/* <label className={styles.labels}>
                    test
                    <input  className={styles.inputs} type="text" name="volume"  onChange={handleChange} value={((statement.newStatement.fees) / (statement.newStatement.volume)*100).toFixed(2)} />
                    <input className={styles.inputs}  type="text" name="statementName" onChange={handleChange}  value={statement.newStatement.statementName}  />

                $
                </label> */}




                <label className={styles.labels}>
                    Debit Card percentage
                    <input className={styles.inputs} placeholder="60 or 40..." type="text" name="debitPercentage" onChange={handleChange}  value={statement.newStatement.debitPercentage}  />
                    {/* debit card volume
                    <input className={styles.inputs}  type="text" name="statementName" onChange={handleChange}  value={(statement.newStatement.debitPercentage/100) * (statement.newStatement.volume)}  /> */}

                %
                 </label>
                 {/* <label className={styles.labels}>
                    Credit Card percentage
                    
                    <input className={styles.inputs} placeholder="60 or 40.." type="text" name="creditPercentage" onChange={handleChange}  value={statement.newStatement.creditPercentage}  /> 
                %
                </label> */}
                <label className={styles.labels}>
                    Credit Card percentage
                    
                    <input className={styles.inputs} placeholder="60 or 40.." type="text" name="creditPercentage" onChange={handleChange}  value={(100)-(statement.newStatement.debitPercentage)}  />
                    {/* <input className={styles.inputs}  type="text" name="statementName" onChange={handleChange}  value={statement.newStatement.statementName}  /> */}
 
                %
                </label>

                <label className={styles.labels}>
                     Debit Interchange
                    <input className={styles.inputs} placeholder="0.6" type="text" name="debitInterchange" onChange={handleChange}  value={statement.newStatement.debitInterchange}  />
                    {/* <input className={styles.inputs}  type="text" name="statementName" onChange={handleChange}  value={statement.newStatement.statementName}  /> */}

                %
                </label>

                

                <label className={styles.labels}>
                    Credit Interchange
                    <input  className={styles.inputs} placeholder="1.90" type="text" name="creditInterchange"  onChange={handleChange} value={statement.newStatement.creditInterchange} />
                    {/* <input className={styles.inputs}  type="text" name="statementName" onChange={handleChange}  value={statement.newStatement.statementName}  /> */}

                %
                </label>

                <label className={styles.labels}>
                    Basis Pts:
                    <input className={styles.inputs} placeholder="0.10" type="text" name="basisPts" onChange={handleChange}  value={statement.newStatement.basisPts}   />
                    {/* <input className={styles.inputs}  type="text" name="statementName" onChange={handleChange}  value={statement.newStatement.statementName}  /> */}

                %
                </label>

                <label className={styles.labels}>
                    transaction Fees
                    <input className={styles.inputs} placeholder="0.10" type="text" name="transactionFee"  onChange={handleChange}   value={statement.newStatement.transactionFee} />
                    {/* <input className={styles.inputs}  type="text" name="statementName" onChange={handleChange}  value={statement.newStatement.statementName}  /> */}

                </label>
                <label className={styles.labels}>
                    transaction Interchange Fees
                    <input className={styles.inputs} placeholder="0.12" type="text" name="transactionInterchangeFees"  onChange={handleChange}   value={statement.newStatement.transactionInterchangeFees} />
                    {/* <input className={styles.inputs}  type="text" name="statementName" onChange={handleChange}  value={statement.newStatement.statementName}  /> */}

                </label>
                <label className={styles.labels}>
                    fake one
                    <input className={styles.inputs} placeholder="0.12" type="text" name="transactionInterchangeFees"  onChange={handleChange}   value={statement.newStatement.transactionInterchangeFees} />
                    {/* <input className={styles.inputs}  type="text" name="statementName" onChange={handleChange}  value={statement.newStatement.statementName}  /> */}

                </label>

                <button>{statement.editMode ? "edit proposal" : "Create a proposal"}</button>
            </form>
        </section>
        <section className={styles.showcase}>
            {props.statement.statements ?
            statement.statements.map((s,i) => (
<>
<article className={styles.wholeCard}>
                <Link handleShowStatement={handleShowStatement} ss={statement.statements[statements.length -1]} to={`/viewStatements/${s._id}`} className={styles.statementLink} key={i}  >
                    <figure className={styles.card} onClick={()=> handleShowStatement(s._id)}>
                        <article className={styles.innerCard} ><h3 className={styles.fonts}>Statement Name : </h3><h3 className={styles.fonts}> {s.statementName}</h3></article>
                        <article className={styles.innerCard} > <h3 className={styles.fonts}>Total: </h3><h3 className={styles.fonts}>{s.volume}</h3></article>
                        <article className={styles.innerCard}> <h3 className={styles.fonts}>Transactions Numbers: </h3><h3 className={styles.fonts}>{s.transactionsNumber}</h3> </article>   
                        <article className={styles.innerCard}><h3 className={styles.fonts}>Current Fee: </h3> <h3 className={styles.fonts}>{s.fees}</h3> </article>   
                    </figure>
                   

                </Link>

                <div className={styles.icons} key={s._id}>
        <div onClick={()=> handleEdit(s._id)}><FcDocument style={{width:"50px", height:"30px"}}/><span></span></div> 
        <div onClick={()=> handleDelete(s._id)} ><FcRemoveImage style={{width:"50px", height:"30px"}}/></div> 
</div> 
</article>

                </>
                                    )) :
                    <article>nothing</article>}
        </section>

    </>

  )
}

export default CreateProposal

