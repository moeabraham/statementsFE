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
  useNavigate
  
  // Link,
  // BrowserRouter
} from "react-router-dom";

import {fetchStatements, createStatement, updateStatement, deleteStatement} from "./services/ApiServices"

function App(props) {
  const navigate = useNavigate();

  const [statement, setStatement] = useState({

    statements: [{
      statementName: "",volume: "",fees:"",transactionsNumber: "",
       debitCardVolume:"", debitPercentage:"",  debitInterchange:"",merchantDebitFees: "",
       creditPercentage:"",creditInterchange:"",creditCardVolume:"",  merchantCreditFees:"",
       basisPts:"",transactionFee:"",
       debitValue:"",creditValue:"",
       transactionInterchangeFees:"",

    
  
    }],

    newStatement:{
      statementName: "", volume: "",fees:"",transactionsNumber: "",
      debitCardVolume:"",  debitPercentage:"",  debitInterchange:"0.6",merchantDebitFees: "",
      creditPercentage:"",creditInterchange:"0.0190",creditCardVolume:"",merchantCreditFees:"",

      basisPts:"0.20 ",transactionFee:"0.10",
      debitValue:"",creditValue:"",
      transactionInterchangeFees:""

      
    },
    showStatement:{
      statementName: "", volume: "",fees:"",transactionsNumber: "",
    debitCardVolume:"",  debitPercentage:"",  debitInterchange:"0.06",merchantDebitFees: "",
    creditPercentage:"",creditInterchange:"0.0190",creditCardVolume:"",merchantCreditFees:"",

    basisPts:"0.20 ",transactionFee:"0.10",
    debitValue:"",creditValue:"",
    transactionInterchangeFees:"",

  
  },
    editMode:false

  } )
const [userState, setUserState]= useState({
  user: null
})


  useEffect(() => {

    const items = JSON.parse(localStorage.getItem("showStatement"))
    console.log(items)
    if (items) setStatement(prevState =>({
      ...prevState,
     showStatement: items
    }))
    // console.log(items)
    // if(statement.showStatement.statementName)
    //   handleShowStatement(statement.statements._id, userState.user.uid)
    async function getAppData(){
      console.log(JSON.parse(localStorage.getItem('showStatement')))

      if(!userState.user) return;
     const statements = await fetchStatements(userState.user.uid);

      setStatement(prevState =>({
        ...prevState,
       showStatement:{
        ...prevState,
        ...statement.showStatement
        
       },
         statements
      }))

      console.log(statement.statements)
     
    }

    getAppData()
   const unsubscripe = auth.onAuthStateChanged(user => setUserState( { user}))
  //  return function(){
  //   unsubscripe()
  // }
    
  },[userState.user])




  function handleChange(e){

    setStatement(prevState => ({
        ...prevState,
        newStatement:{
            ...prevState.newStatement,
            [e.target.name] : e.target.value,

        }
    }))


}
  function handleEdit(id){
    if(!userState.user) return;
    const statementToEdit = statement.statements.find(statement => statement._id === id)

   setStatement(prevState => ({
        ...prevState,
        newStatement: statementToEdit,
        editMode: true
    }))
}

async function handleShowStatement(id, uids){
  let {uid} = userState.user.uid
  if(!userState.user) return;

  const statements = await fetch(`https://statementsbe.herokuapp.com/api/statements/${id}?uid=${uid}`)
  .then(res=> res.json())
  if (statements) localStorage.setItem('showStatement', JSON.stringify(statements))
setStatement(prevState=> ({
    ...prevState,
    // ...statements,
    showStatement:statements   
    
}))



}

async function handleDelete(id){
  if(!userState.user) return;
  const statements = await deleteStatement(id, userState.uid)
  statements ? console.log(statements) : console.log("no")
  try{
    console.log(statements)
    setStatement(prevState=> ({
      ...prevState,
      statements
  }))

  } catch(error){
    console.log(error)
  }

   
    
}


async  function handleSubmit(e){

  e.preventDefault()
  const {uid} = userState

  if(statement.editMode){
      const{statementName, volume, fees, transactionsNumber,_id,merchantDebitFees,merchantCreditFees,debitPercentage,creditPercentage,debitInterchange, creditInterchange, basisPts,transactionFee,debitValue,creditValue   } =statement.newStatement
     try{
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
               debitValue:"",creditValue:"",
               transactionInterchangeFees:""

        
              
          }
      }))
     } catch(err){
      console.log(err)
     }


  } else {
      try{
          // createStatement(statement.newStatement)
          const statementAdd = await createStatement(statement.newStatement, userState.user.uid)
          if (statementAdd) localStorage.setItem('showStatement', JSON.stringify(statementAdd))

          // console.log(showStatement)
          console.log(JSON.parse(localStorage.getItem('showStatement')))
        
          // fetch("https://statementsbe.herokuapp.com/api/statements",{
          //     method: "POST",
          //     headers:{
          //         "Content-type" : "Application/json"
          //     },
          //     body:JSON.stringify({...statement.newStatement, uid})
          // }).then(res=>res.json())

          

          // console.log(statementAdd)
              setStatement({
                  statements:[...statement.statements, statementAdd],
                  newStatement:{
                      statementName: "",volume: "",fees:"",transactionsNumber: "",
                       debitCardVolume:"",debitInterchange:"", debitPercentage:"", merchantDebitFees: "",
                       creditPercentage:"",creditInterchange:"",creditCardVolume:"",  merchantCreditFees:"",

                    
                      basisPts:"",transactionFee:"",    
                      debitValue:"",creditValue:"",
                      transactionInterchangeFees:"",

                  },
                  showStatement: {...statementAdd}
              })

      } catch(err){
          console.log(err)
      }
  }
  navigate('/ViewStatements/:id');


  }


  return (

    <>
    <div>  
            <Header userState={userState} setUserState={setUserState} /> 
    </div>

         <Routes >
          <Route  path="/" element={<Landing />} />
         
          <Route  path="/ViewStatements" element={<ViewStatements userState={userState} setUserState={setUserState} handleShowStatement={handleShowStatement}    statement={statement} setStatement={setStatement} handleEdit={handleEdit} handleDelete={handleDelete}  handleChange={handleChange}/>} />
          <Route  path="/ViewStatements/:id"   element={<StatementPage userState={userState} setUserState={setUserState} handleShowStatement={handleShowStatement}   statement={statement} setStatement={setStatement} handleEdit={handleEdit} handleDelete={handleDelete}  handleChange={handleChange} ss={statement.statement}/>} />
          <Route  path="/CreateProposal" element={<CreateProposal userState={userState} setUserState={setUserState}  handleShowStatement={handleShowStatement}   statement={statement} setStatement={setStatement} handleEdit={handleEdit} handleSubmit={handleSubmit} handleDelete={handleDelete}  handleChange={handleChange} />} />
        
        </Routes>
   </>
  );
}

export default App;
