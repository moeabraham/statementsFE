import React,{useEffect,useState} from 'react'
import { useParams,  } from "react-router-dom";
import styles from './StatementPage.module.css';

function StatementPage(props) {
    const {id} = useParams();
    console.log(id)
    console.log(props)
    const {showStatement} = props.statement;
    console.log(showStatement)
    // let [showStatement, setShowStatement] =useState([]);
    // setShowStatement()
    // const showStatements =  props.statement.statements.find(statement => statement._id === id)
    // console.log(showStatement)


    
  return (
    <>
 {/* <pre>
  {JSON.stringify(showStatement, null, 2)}
</pre> */}

<h1>{props.statement.showStatement.statementName}</h1>
{/* <section className={styles.container}>
    <article className={styles.cards}>
            <h1> statementName: {showStatement.statementName} </h1>
            <h2>{showStatement.volume}</h2>
            <h2>{showStatement.fees}</h2>
            <h2>{showStatement.volume}</h2>
    </article>
</section>
 */}
<figure className={styles.mainCard}  >
        <article className={styles.innerCard}><h3 className={styles.fonts}>Statement Name : {showStatement.statementName}</h3></article>
        <article className={styles.innerCard} > <h3>Total Volume: </h3><h3>{showStatement.volume}</h3></article>
        <article className={styles.innerCard}> <h3>Transactions Numbers: </h3><h3>{showStatement.transactionsNumber}</h3> </article>   
        <article className={styles.innerCard}><h3>Current Fee: </h3> <h3>{showStatement.fees}</h3> </article>  

        <article className={styles.innerCard}><h3 className={styles.fonts}>Debit Fees : {showStatement.debitFees}%</h3></article>
        <article className={styles.innerCard}><h3 className={styles.fonts}>Debit Volume : { (showStatement.debitPercentage/100) * showStatement.volume}</h3></article>

        <article className={styles.innerCard} > <h3>Credit Fees: </h3><h3>{showStatement.creditFees}</h3></article>
        <article className={styles.innerCard} > <h3>Credit Volume:  </h3><h3>{(showStatement.creditPercentage/100) * showStatement.volume}</h3></article>
        <article className={styles.innerCard}> <h3>Basis Points: </h3><h3>{(showStatement.basisPts) * showStatement.volume}</h3> </article>   
        <article className={styles.innerCard}><h3>Transaction Fee: </h3> <h3>{(showStatement.transactionFee) * (showStatement.transactionsNumber)}</h3> </article>  
        <div className={styles.icons}>
            {/* <div onClick={()=> handleEdit(s._id)}><FcDocument style={{width:"50px", height:"30px"}}/><span></span></div> 
            <div onClick={()=> handleDelete(s._id)}><FcRemoveImage style={{width:"50px", height:"30px"}}/></div>  */}
        </div>
    </figure>

     </>
  )
}

export default StatementPage