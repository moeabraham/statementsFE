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

    function fees(a,b,c,d,e){
        return a + b +c + d + e
    }
    console.log(fees(1,2,3,4,5))
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
        <article className={styles.innerCard} > <h3>Total Volume: </h3><h3>{showStatement.volume}$</h3></article>
        <article className={styles.innerCard}> <h3>Transactions Numbers: </h3><h3>{showStatement.transactionsNumber}</h3> </article>   
        <article className={styles.innerCard}><h3>Current Fee: </h3> <h3>{showStatement.fees}%</h3> </article>  

        <article className={styles.innerCard}><h3 className={styles.fonts}>Debit Interchange : {showStatement.debitInterchange}</h3></article>
        <article className={styles.innerCard}><h3 className={styles.fonts}>Debit Volume : { (showStatement.debitPercentage/100) * showStatement.volume}$</h3></article>

        <article className={styles.innerCard} > <h3>Credit Interchange: </h3><h3>{showStatement.creditInterchange}</h3></article>
        {/* volume - debit volume */}
        <article className={styles.innerCard} > <h3>Credit Volume:  </h3><h3>{((showStatement.creditPercentage)/100) * showStatement.volume} $</h3></article>
        <article className={styles.innerCard}><h3 className={styles.fonts}>MCF : { ((showStatement.creditPercentage)/100) * showStatement.volume}$</h3></article>

        <article className={styles.innerCard}> <h3>Basis Points: </h3><h3>{(showStatement.basisPts) * showStatement.volume}$</h3> </article>   
        <article className={styles.innerCard}><h3>Transaction Fee: </h3> <h3>{(showStatement.transactionFee) * (showStatement.transactionsNumber)}</h3> </article>  
        <article className={styles.innerCard}>
        <ul>
            <li>PCI Fee: $9.19</li>
            <li>Debit Access Fee: $4.95</li>
         <li>IRS Fee: $4.95</li>

        </ul>
        </article>
        <div className={styles.icons}>
            {/* <div onClick={()=> handleEdit(s._id)}><FcDocument style={{width:"50px", height:"30px"}}/><span></span></div> 
            <div onClick={()=> handleDelete(s._id)}><FcRemoveImage style={{width:"50px", height:"30px"}}/></div>  */}
        </div>
        <article>
            <h1>Our Savings : </h1>
            total Fees: {((showStatement.debitPercentage)/100) * showStatement.volume} + { ((showStatement.creditPercentage)/100) * showStatement.volume} + 19.09 + {(showStatement.basisPts) * showStatement.volume} + {(showStatement.transactionFee) * (showStatement.transactionsNumber)})
            {/* <h2>our fees total : `${}` </h2> */}
        </article>
    </figure>

     </>
  )
}

export default StatementPage