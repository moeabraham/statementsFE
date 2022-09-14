const BASE_URL ="https://statementsbe.herokuapp.com/api/statements"
// const BASE_URL ="http://localhost:3001/api/statements"

 function fetchStatements(uid){

return fetch(`${BASE_URL}?uid=${uid}`)
      .then(res => res.json())

}


function updateStatement({statementName, volume, fees, transactionsNumber,_id,merchantDebitFees,merchantCreditFees,debitPercentage,creditPercentage,debitInterchange, creditInterchange, basisPts,transactionFee,debitValue,creditValue}, uid){
    return fetch(`${BASE_URL}/${_id}?uid=${uid}`,{
        method:"PUT",
        headers:{
            'Content-type' : "Application/json"
        },
        body:JSON.stringify({statementName, volume, fees, transactionsNumber,_id,merchantDebitFees,merchantCreditFees,debitPercentage,creditPercentage,debitInterchange, creditInterchange, basisPts,transactionFee,debitValue,creditValue})
    }).then(res => res.json())
}

function createStatement(data, uid){
    console.log(data)
    return fetch (BASE_URL,{
                method: "POST",
                headers:{
                    "Content-type" : "Application/json"
                },
                
                body:JSON.stringify({...data, uid})
                // body:JSON.stringify({...statement.newStatement, uid})
            // }).then(res=>res.json())

    })
        .then(res=>res.json())
}

 function deleteStatement(statementId, uid){
        return fetch(`${BASE_URL}/${statementId}?uid=${uid}`, {
        method : "DELETE"
    }).then(res=> res.json())

}


export {
    fetchStatements,
    updateStatement,
    createStatement,
    deleteStatement,
}