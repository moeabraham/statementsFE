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
  Link,
  BrowserRouter
} from "react-router-dom";

// import {fetchStatements} from "./services/ApiServices"

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
      debitCardVolume:"",  debitPercentage:"",  debitInterchange:"0.06",merchantDebitFees: "",
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

  })
const [userState, setUserState]= useState({
  user: null
})

  

  useEffect(() => {
      console.log(statement.showStatement)
    // }
    async function getAppData(){
     const statements = await fetch( "https://statementsbe.herokuapp.com/api/statements")
      .then(res => res.json())
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
    auth.onAuthStateChanged(user => setUserState( { user}))

  },[])





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

async function handleShowStatement(id){
  // console.log(props)
  const statements = await fetch(`https://statementsbe.herokuapp.com/api/statements/${id}`)
  .then(res=> res.json())
setStatement(prevState=> ({
    ...prevState,
    showStatement:statements   
    
}))



}

async function handleDelete(id){
    const statements = await fetch(`https://statementsbe.herokuapp.com/api/statements/${id}`, {
        method : "DELETE"
    }).then(res=> res.json())
    setStatement(prevState=> ({
        ...prevState,
        statements
    }))
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
          <Route  path="/CreateProposal" element={<CreateProposal userState={userState} setUserState={setUserState} statement={statement} setStatement={setStatement} handleEdit={handleEdit} handleDelete={handleDelete}  handleChange={handleChange} />} />
        
        </Routes>
   </>
  );
}

export default App;
