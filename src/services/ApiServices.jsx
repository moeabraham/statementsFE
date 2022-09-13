// const BASE_URL ="https://statementsbe.herokuapp.com/api/statements"


//  function fetchStatements(){

// return fetch(BASE_URL)
//       .then(res => res.json())

// }


// function updateStatement({statementName, volume, fees, transactionsNumber,_id,merchantDebitFees,merchantCreditFees,debitPercentage,creditPercentage,debitInterchange, creditInterchange, basisPts,transactionFee,debitValue,creditValue}){
//     return fetch(`${BASE_URL}/${_id}`,{
//         method:"PUT",
//         headers:{
//             'Content-type' : "Application/json"
//         },
//         body:JSON.stringify({statementName, volume, fees, transactionsNumber,_id,merchantDebitFees,merchantCreditFees,debitPercentage,creditPercentage,debitInterchange, creditInterchange, basisPts,transactionFee,debitValue,creditValue})
//     }).then(res => res.json())
// }

// function createStatement(data){
//     console.log(data)
//     // return fetch (BASE_URL,{
//     //                     method: "POST",
//     //             headers:{
//     //                 "Content-type" : "Application/json"
//     //             },
                
//     //             body:JSON.stringify(data)
//     //             // body:JSON.stringify({...statement.newStatement, uid})
//     //         // }).then(res=>res.json())

//     // })
//     //     .then(res=>res.json())
// }


// export {
//     fetchStatements,
//     updateStatement,
//     createStatement,
// }