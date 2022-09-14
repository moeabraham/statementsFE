import  {useState, useEffect} from "react";
// import Header from "./components/Header/Header"
// import LandingPage from "./components/LandingPage/LandingPage";
import Landing from "./pages/LandingPage/LandingPage";
import Header from './components/Header/Header'
import {auth} from "./services/firebase"

import ViewStatements from "./pages/ViewStatements/ViewStatements";
import CreateProposal from "./pages/CreateProposal/CreateProposal";
import StatementPage from "./pages/StatementPage/StatementPage"
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  // BrowserRouter
} from "react-router-dom";

import {fetchStatements, createStatement, updateStatement, deleteStatement} from "./services/ApiServices"

function App(props) {
  const [statement, setStatement] = useState({

    statements: [{
      statementName: "",volume: "",fees:"",transactionsNumber: "",
       debitCardVolume:"", debitPercentage:"",  debitInterchange:"",merchantDebitFees: "",
       creditPercentage:"",creditInterchange:"",creditCardVolume:"",  merchantCreditFees:"",
       basisPts:"",transactionFee:"",
       debitValue:"",creditValue:"",

    
  
    }],

    newStatement:{
      statementName: "", volume: "",fees:"",transactionsNumber: "",
      debitCardVolume:"",  debitPercentage:"",  debitInterchange:"0.6",merchantDebitFees: "",
      creditPercentage:"",creditInterchange:"0.0190",creditCardVolume:"",merchantCreditFees:"",

      basisPts:"0.20 ",transactionFee:"0.10",
      debitValue:"",creditValue:"",
      
    },
    showStatement:{
      statementName: "", volume: "",fees:"",transactionsNumber: "",
    debitCardVolume:"",  debitPercentage:"",  debitInterchange:"0.06",merchantDebitFees: "",
    creditPercentage:"",creditInterchange:"0.0190",creditCardVolume:"",merchantCreditFees:"",

    basisPts:"0.20 ",transactionFee:"0.10",
    debitValue:"",creditValue:""},
    editMode:false

  } )
const [userState, setUserState]= useState({
  user: null
})

  // console.log(userState)

  useEffect(() => {
      // console.log(userState.user.uid)
    // }

    async function getAppData(){
      if(!userState.user) return;
      console.log(userState.user.uid)
     const statements = await fetchStatements(userState.user.uid);
    //  console.log(statements)
     
    //  ( "https://statementsbe.herokuapp.com/api/statements")
    //   .then(res => res.json())
      setStatement(prevState =>({
        ...prevState,
       showStatement:{
        ...prevState,
        ...statement.showStatement
       },
         statements
      }))

                 
  //  setStatement(statements)
    }

    getAppData()
    // handleShowStatement()
   const unsubscripe = auth.onAuthStateChanged(user => setUserState( { user}))

  },[userState.user])




  function handleChange(e){
    let debitCardVolume = statement.newStatement.volume *statement.newStatement.debitPercentage
    setStatement(prevState => ({
        ...prevState,
        newStatement:{
            ...prevState.newStatement,
            [e.target.name] : e.target.value,

        }
    }))


}
  function handleEdit(id){
    const statementToEdit = statement.statements.find(statement => statement._id === id)

   setStatement(prevState => ({
        ...prevState,
        newStatement: statementToEdit,
        editMode: true
    }))
}

async function handleShowStatement(id, uids){
  // console.log(props)
  let {uid} = userState.user.uid
  console.log(uid)
  if(!userState.user.uid) return;

  const statements = await fetch(`https://statementsbe.herokuapp.com/api/statements/${id}?uid=${uid}`)
  .then(res=> res.json())
setStatement(prevState=> ({
    ...prevState,
    showStatement:statements   
    
}))



}

async function handleDelete(id){

  try{
    const statements = await deleteStatement(id)
    setStatement(prevState=> ({
      ...prevState,
      statements
  }))

  } catch(error){
    console.log(error)
  }
   
    
    // fetch(`https://statementsbe.herokuapp.com/api/statements/${id}`, {
    //     method : "DELETE"
    // }).then(res=> res.json())
}


async  function handleSubmit(e){

  e.preventDefault()
  const {uid} = userState

  if(statement.editMode){
      const{statementName, volume, fees, transactionsNumber,_id,merchantDebitFees,merchantCreditFees,debitPercentage,creditPercentage,debitInterchange, creditInterchange, basisPts,transactionFee,debitValue,creditValue   } =statement.newStatement
     try{
      // updateStatement(newStatement)
      const editedStatements = await updateStatement(statement.newStatement, userState.user.uid)
      
      // fetch(`https://statementsbe.herokuapp.com/api/statements/${_id}`,{
      //     method:"PUT",
      //     headers:{
      //         'Content-type' : "Application/json"
      //     },
      //     body:JSON.stringify(statement.newStatement)
      // }).then(res => res.json() )
      
     

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
          // createStatement(statement.newStatement)
          const statementAdd = await createStatement(statement.newStatement, userState.user.uid)
          
          // fetch("https://statementsbe.herokuapp.com/api/statements",{
          //     method: "POST",
          //     headers:{
          //         "Content-type" : "Application/json"
          //     },
          //     body:JSON.stringify({...statement.newStatement, uid})
          // }).then(res=>res.json())

          

          console.log(statementAdd)
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
    <div>  
            <Header userState={userState} setUserState={setUserState} /> 
    </div>

         <Routes >
          <Route  path="/" element={<Landing />} />
         
          <Route  path="/ViewStatements" element={<ViewStatements userState={userState} setUserState={setUserState}  handleShowStatement={handleShowStatement}    statement={statement} setStatement={setStatement} handleEdit={handleEdit} handleDelete={handleDelete}  handleChange={handleChange}/>} />
          <Route  path="/ViewStatements/:id"  handleShowStatement={handleShowStatement} element={<StatementPage userState={userState} setUserState={setUserState}  handleShowStatement={handleShowStatement}  statement={statement} setStatement={setStatement} handleEdit={handleEdit} handleDelete={handleDelete}  handleChange={handleChange}/>} />
          <Route  path="/CreateProposal" element={<CreateProposal userState={userState} setUserState={setUserState} statement={statement} setStatement={setStatement} handleEdit={handleEdit} handleSubmit={handleSubmit} handleDelete={handleDelete}  handleChange={handleChange} />} />
        
        </Routes>
   </>
  );
}

export default App;
