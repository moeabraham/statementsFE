import React,{useEffect,useState} from 'react'
import { useParams,  } from "react-router-dom";
import styles from './StatementPage.module.css';
import {FcDepartment} from "react-icons/fc";
// import  { useEffect} from "react";
import {Link} from "react-router-dom"
function StatementPage(props) {
    const {id} = useParams();
    // const[pageData, setPageData] = useState({
    //     pageData: props.statement.showStatement
    // })
    // setPageData()
    // console.log(pageData)
    // setPageData(props.statement.showStatement)
    // console.log(id)
    // console.log(pageData)
    // console.log(props.statement.showStatement)
    // console.log(props)
    // console.log(id)
    const {showStatement} = props.statement;
    // console.log(showStatement)
    // console.log((showStatement.debitPercentage *showStatement.volume )/100)
    let debitCardVolume = (showStatement.debitPercentage/100) * (showStatement.volume);
    // let merchantDebitFees = (((showStatement.debitInterchange)/(100)) * (debitCardVolume))
    let merchantDebitFees = (((showStatement.debitInterchange)/(100)) * (debitCardVolume));


    let creditCardVolume = (showStatement.creditPercentage/100) * (showStatement.volume);
    let merchantCreditFees = (((showStatement.creditInterchange)/(100)) * (creditCardVolume));
    let basisPts = ((showStatement.basisPts) * (showStatement.volume)/100);
    let transactionsFee = (showStatement.transactionFee) * (showStatement.transactionsNumber);
    let miscellaneous = 34.59;
    let currentFees = ((showStatement.fees) );
    let customerPaying =( (showStatement.volume) * (currentFees/100)).toFixed(2);

    let cutomerEffectiveRate = ((showStatement.fees) / (showStatement.volume)*100).toFixed(2);
    
    // console.log(cutomerEffectiveRate)
    // console.log(showStatement.fees)
    // console.log(showStatement.volume)
    let transactionInterchangeFees = ((showStatement.transactionInterchangeFees) * (showStatement.transactionsNumber))
    let fees = (merchantDebitFees + merchantCreditFees + basisPts + transactionsFee + miscellaneous + transactionInterchangeFees)
    let screenFees = fees.toFixed(2)
    // console.log(screenFees)
    // console.log(showStatement.volume)
    let ourRate = (((screenFees) / (showStatement.volume))*100).toFixed(3);

    let ourSavings =  (currentFees- screenFees ).toFixed(2) ;
    // console.log(merchantCreditFees)
    // console.log(((showStatement.creditInterchange)/(100)))
    // console.log(creditCardVolume)

const[thisPage, setThisPage] = useState({

})

  return (
    <>
    {/* {console.log(showStatement)} */}
    {/* thisPage={thisPage} settingThePage = {settingThePage} */}
        <h1 className={styles.headerTitle}>{props.statement.showStatement.statementName}</h1>
       <Link to="/"   >  <FcDepartment style={{width:"60px", height:"50px"}}/></Link>
 <section className={styles.container}>
<figure className={styles.mainCard}  >
    <section className={styles.half}>
    {/* <section className={styles.half}> */}
        <article className={styles.innerCard}><h4 className={styles.fonts}>Statement Name :</h4> <h4> {showStatement.statementName}</h4></article>
        <article className={styles.innerCard} > <h4 className={styles.fonts}>Total Volume: </h4><h4>{showStatement.volume}$</h4></article>
        <article className={styles.innerCard}> <h4 className={styles.fonts}>Transactions Numbers: </h4><h4>{showStatement.transactionsNumber}</h4> </article>   
        <article className={styles.innerCard}><h4 className={styles.fonts}>Current Fee: </h4> <h4>{showStatement.fees}$</h4> </article>  

        <article className={styles.innerCard}><h4 className={styles.fonts}>Debit Interchange :</h4><h4> {showStatement.debitInterchange}% </h4></article>
        <article className={styles.innerCard}><h4 className={styles.fonts}>Debit Volume :</h4><h4> { (showStatement.debitPercentage/100) * showStatement.volume}$</h4></article>
        {/* <article className={styles.innerCard}><h3 className={styles.fonts}>MDF : { (((showStatement.debitInterChange)/(100)) * (showStatement.volume))}$</h3></article> */}
        <article className={styles.innerCard}><h4 className={styles.fonts}>MDF :</h4><h4> { merchantDebitFees.toFixed(2)}$</h4></article>
    {/* </section> */}
    {/* <section className={styles.half}> */}

        <article className={styles.innerCard} > <h4>Credit Interchange: </h4><h4>{showStatement.creditInterchange}%</h4></article>
        {/* volume - debit volume */}  
        <article className={styles.innerCard} > <h4>Credit Volume:  </h4><h4>{((showStatement.creditPercentage)/100) * showStatement.volume} $</h4></article>
        {/* <article className={styles.innerCard}><h3 className={styles.fonts}>MCF : { ((showStatement.creditPercentage)/100) * showStatement.volume}$</h3></article> */}
        <article className={styles.innerCard}><h4 className={styles.fonts}>MCF :</h4><h4> {merchantCreditFees.toFixed(2)}$</h4></article>

        <article className={styles.innerCard}> <h4>Basis Points: </h4><h4>{(((showStatement.basisPts) * (showStatement.volume))/100) }$</h4> </article>   
         <article className={styles.innerCard}><h4>Transaction Fee: </h4> <h4>{((showStatement.transactionFee) * (showStatement.transactionsNumber)).toFixed(2) }$</h4> </article>  
         <article className={styles.innerCard}><h4>Transaction Interchange Fees: </h4> <h4>{((showStatement.transactionInterchangeFees) * (showStatement.transactionsNumber)).toFixed(2) }$</h4> </article>  
       
    {/* </section> */}
    </section>
    <article className={styles.fees} >
        <ul>
            <li>
                <h3>PCI Fee: $9.19</h3>
            </li>
            <li>
                <h3>Debit Access Fee: $4.95</h3>
            </li>
            <li>
                <h3>IRS Fee: $4.95</h3>
            </li>
            <li>
                <h3>Batch Fee: $7.50</h3>
            </li>
         </ul>
    </article>
        
   
    <article className={styles.customerProposal}>
          
        <div className={styles.proposalTitles}> 
            <h1 className={styles.proposalTitlesFonts}>Our Offer : </h1>
            <h1 className={styles.proposalTitlesFonts}>{`${screenFees}$`}</h1> 
        </div>

        <div className={styles.proposalTitles}>           
            <h1 className={styles.proposalTitlesFonts}> Current Rate: {`${cutomerEffectiveRate}%`} </h1>
        </div>

        <div className={styles.proposalTitles}> 
            <h1 className={styles.proposalTitlesFonts}>Our Rate :{`${ourRate}%`} </h1>
        </div>       

        <div className={styles.proposalTitles}>
            <h1 className={styles.proposalTitlesFonts}> Customer currently Paying: {`${currentFees}$`}</h1>
        </div>

        {/* <div className={styles.proposalTitles}> */}
            {ourSavings >=0 ? <div className={styles.green} >Our Savings: {`${ourSavings}$` }</div> :  <>We would still love doing busienss with you<div className={styles.red} > {`${ourSavings}` }</div></>}
        {/* </div>   */}
    </article>
    </figure>
    </section>
    
     </>
  )
}

export default StatementPage;






              {/* <div>{`${ourSavings}` }<h1> ourSavings : {`${ourSavings}`}</h1></div> */}

            {/* total Fees: fees{((showStatement.debitPercentage)/100) * showStatement.volume} + { ((showStatement.creditPercentage)/100) * showStatement.volume} + 19.09 + {(showStatement.basisPts) * showStatement.volume} + {(showStatement.transactionFee) * (showStatement.transactionsNumber)} */}
            {/* <h2>our fees total : `${}` </h2> */}



     {/* <div className={styles.icons}> */}
            {/* <div onClick={()=> handleEdit(s._id)}><FcDocument style={{width:"50px", height:"30px"}}/><span></span></div> 
            <div onClick={()=> handleDelete(s._id)}><FcRemoveImage style={{width:"50px", height:"30px"}}/></div>  */}
        {/* </div> */}