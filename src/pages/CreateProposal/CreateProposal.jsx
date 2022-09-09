import React from 'react'
import Header from '../../components/Header/Header';
import { Link } from "react-router-dom";
import {FcPlus} from "react-icons/fc";
import {FcBriefcase} from "react-icons/fc";

import styles from "./CreateProposal.module.css";
import FcAddDatabase from "react-icons/fc"
// import {FcPlus} from 'react-icons/fc';
import {FcDocument} from "react-icons/fc";
import {FcRemoveImage} from "react-icons/fc";
import {useState} from 'react'
function CreateProposal(props) {

        // console.log(props.statement.statements)
        // const{statementName,volume, fees, transactionsNumber} = props.statement.newStatement
        // console.log(props.statement.newStatement)
        const{statement, setStatement, handleEdit, handleDelete, handleChange} =  props
        const{ newStatement, statements, editMode, } = statement
        // console.log(statement.statements[0]._id)
        // console.log(props.statement..fees)
        // const{_id} = props.statement.statements
        // console.log(_id)
      
// const [mdf, setMdf] = useState({
//     value: statement.newStatement.volume * statement.newStatement.debitFees
// })


    // function handleChange(e){

    //     // console.log(e.target.value)
    //     setStatement(prevState => ({
    //         ...prevState,
    //         newStatement:{
    //             ...prevState.newStatement,
    //             [e.target.name] : e.target.value

    //         }
    //     }))

    //     // [e.target.name] = e.target.value
    // }


   

  async  function handleSubmit(e){
    e.preventDefault()
    console.log(statement)
    if(editMode){
        const{statementName, volume, fees, transactionsNumber,_id,merchantDebitFees,merchantCreditFees} =statement.newStatement
       try{
        const editedStatements = await fetch(`http://localhost:3001/api/statements/${_id}`,{
            method:"PUT",
            headers:{
                'Content-type' : "Application/json"
            },
            body:JSON.stringify(statement.newStatement)
        }).then(res => res.json() )

        setStatement(prevState=>({
            ...prevState,
           statements: editedStatements,
            editMode: false,
            newStatement:{
                statementName: "",volume: "",fees:"",transactionsNumber: "",
                 debitCardVolume:"",debitInterchange:"", debitPercentage:"", merchantDebitFees: "",
                 creditPercentage:"",creditInterchange:"",creditCardVolume:"",merchantCreditFees:"",
                 basisPts:"",transactionFee:"",
                 debitValue:"",creditValue:""
          
                
            }
        }))
       } catch(err){
        console.log(err)
       }


    } else {
        try{
            const statementAdd = await fetch("http://localhost:3001/api/statements",{
                method: "POST",
                headers:{
                    "Content-type" : "Application/json"
                },
                body:JSON.stringify(statement.newStatement)
            }).then(res=>res.json())

                setStatement({
                    statements:[...statement.statements, statementAdd],
                    newStatement:{
                        statementName: "",volume: "",fees:"",transactionsNumber: "",
                         debitCardVolume:"",debitInterchange:"", debitPercentage:"", merchantDebitFees: "",
                         creditPercentage:"",creditInterchange:"",creditCardVolume:"",  merchantCreditFees:"",

                      
                        basisPts:"",transactionFee:"",    
                        debitValue:"",creditValue:"",
                    }
                })

        } catch(err){
            console.log(err)
        }
    }
    
    }


  return (
    <>  
        {/* <Header /> */}
        <Link to="/ViewStatements"><div className={styles.links}><FcBriefcase style={{height:"40px",width:"50px"}} /></div></Link>

        <h1> Create wazaaaap</h1>
        <section className={styles.formPage}>
        <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.labels}>
            Name
                <input className={styles.inputs} type="text" name="statementName" onChange={handleChange}  value={statement.newStatement.statementName}  />
            </label>
            <label className={styles.labels}>
                total volume
                <input  className={styles.inputs} type="text" name="volume"  onChange={handleChange} value={statement.newStatement.volume} />
            </label>
            <label className={styles.labels}>
                current fee
                <input className={styles.inputs} type="text" name="fees" onChange={handleChange}  value={statement.newStatement.fees}   />
            </label>
            <label className={styles.labels}>
                transaction number
                <input className={styles.inputs} type="text" name="transactionsNumber"  onChange={handleChange}   value={statement.newStatement.transactionsNumber} />
            </label>
            <label className={styles.labels}>
            Debit Card Transaction %
                <input className={styles.inputs} type="text" name="debitPercentage" onChange={handleChange}  value={statement.newStatement.debitPercentage}  />
            </label>
            <label className={styles.labels}>
            Debit Interchange
                <input className={styles.inputs} type="text" name="debitInterchange" onChange={handleChange}  value={statement.newStatement.debitInterchange}  />
                <span>debit card% volume<input value={statement.newStatement.debitCardVolume} name="debitCardVolume"onChange={handleChange} /></span>
                <span>MDF<input value={statement.newStatement.merchantDebitFees} onChange={handleChange} name="merchantDebitFees" /> </span>
            </label>
            <label className={styles.labels}>
            Credit Card Transaction %
                <input className={styles.inputs} type="text" name="creditPercentage" onChange={handleChange}  value={statement.newStatement.creditPercentage}  />
                <span>credit card% * total volume<input value={statement.newStatement.creditCardVolume} name="creditCardVolume" onChange={handleChange} /></span>
                <span>MCF<input value={statement.newStatement.merchantCreditFees} name="merchantCreditFees" onChange={handleChange} /></span>

            </label>
            <label className={styles.labels}>
                Credit Interchange
                <input  className={styles.inputs} type="text" name="creditInterchange"  onChange={handleChange} value={statement.newStatement.creditFees} />
            </label>
            <label className={styles.labels}>
                Basis Pts
                <input className={styles.inputs} type="text" name="basisPts" onChange={handleChange}  value={statement.newStatement.basisPts}   />
            </label>
            <label className={styles.labels}>
                transaction Fees
                <input className={styles.inputs} type="text" name="transactionFee"  onChange={handleChange}   value={statement.newStatement.transactionFee} />
            </label>








            <button>{statement.editMode ? "edit proposal" : "Create a proposal"}</button>







        </form>
        </section>
        <section className={styles.showcase}>
        {props.statement.statements ?
     
statement.statements.map((s,i) => (
    <figure className={styles.card} key={i}>
        <article className={styles.innerCard}><h3 className={styles.fonts}>Statement Name : </h3><h3> {s.statementName}</h3></article>
        <article className={styles.innerCard} > <h3>Total: </h3><h3>{s.volume}</h3></article>
        <article className={styles.innerCard}> <h3>Transactions Numbers: </h3><h3>{s.transactionsNumber + 1000}</h3> </article>   
        <article className={styles.innerCard}><h3>Current Fee: </h3> <h3>{s.fees}</h3> </article>  
        <div className={styles.icons}>
            <div onClick={()=> handleEdit(s._id)}><FcDocument style={{width:"50px", height:"30px"}}/><span></span></div> 
            <div onClick={()=> handleDelete(s._id)}><FcRemoveImage style={{width:"50px", height:"30px"}}/></div> 
        </div>
    </figure>
    )) : <div>nothing</div>}
        </section>






      </>

  )
}

export default CreateProposal