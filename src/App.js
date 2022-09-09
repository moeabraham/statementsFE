import  {useState, useEffect} from "react";
// import Header from "./components/Header/Header"
// import LandingPage from "./components/LandingPage/LandingPage";
import Landing from "./pages/LandingPage/LandingPage";
import Header from './components/Header/Header'

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

function App() {

  // const [statement, setStatement] = useState({
  //   statementName: "",
  //   volume: "",
  //   fees:"",
  //   transactionsNumber: "",
  //   editMode: false
  // })
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
      debitCardVolume:"",  debitPercentage:"",  debitInterchange:"0.006",merchantDebitFees: "",
      creditPercentage:"",creditInterchange:"0.0190",creditCardVolume:"",merchantCreditFees:"",

      basisPts:"0.0020 ",transactionFee:"0.10",
      debitValue:"",creditValue:"",
      
    },
    showStatement:[],

    editMode:false

  })

// console.log(statement)

  

  useEffect(() => {
    async function getAppData(){
     const statements = await  fetch("http://localhost:3001/api/statements")
      .then(res => res.json())
      // console.log(statements)
      setStatement(prevState =>({
                   ...prevState,
                    statements
                 }))
  //  setStatement(statements)
    }

    // console.log(statement)
    getAppData()

  },[])





  function handleChange(e){
    // let debitCardVolume = statement.newStatement.volume *statement.newStatement.debitPercentage
// console.log(statement.newStatement.currentFee)
    // console.log(e.target.value)
    // let debitCardVolume= statement.newStatement.volume * statement.newStatement.debitPercentage;

    setStatement(prevState => ({
        ...prevState,
        newStatement:{
            ...prevState.newStatement,
            [e.target.name] : e.target.value,

            // debitPercentage: volume * debitPercentage
            // transactionsNumber: (parseInt(statement.newStatement.currentFee,10)  * parseInt(statement.newStatement.volume, 10) )

        }
    }))

    

    // [e.target.name] = e.target.value
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
  const statements = await fetch(`http://localhost:3001/api/statements/${id}`)
  .then(res=> res.json())
console.log(statements)
setStatement(prevState=> ({
    ...prevState,
    // statements:[...statements,statements],
    showStatement:statements,
    
}))

}

async function handleDelete(id){
    const statements = await fetch(`http://localhost:3001/api/statements/${id}`, {
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
            <Header /> 
    </div>


    {/* <h1>dsds</h1> */}
    {/* <Link to="/CreateProposal" state={{}} */}
    {/* <Link to="/ViewStatements"   state={{statement : statement }} ></Link> */}
    {/* <Link to="/CreateProposal"  ></Link> */}
{/* <Routes>
<Route  path="/" element={<Landing />} />
<Route  path="/ViewStatements" element={<ViewStatements  statement={statement} setStatement={setStatement} />} />
<Route  path="/CreateProposal" element={<CreateProposal statement={statement} setStatement={setStatement}/>} />
</Routes> */}
         <Routes >
          <Route  path="/" element={<Landing />} />
          {/*statement={statement} setStatement={setStatement} */}
          <Route  path="/ViewStatements" element={<ViewStatements handleShowStatement={handleShowStatement}    statement={statement} setStatement={setStatement} handleEdit={handleEdit} handleDelete={handleDelete}  handleChange={handleChange}/>} />
          <Route  path="/ViewStatements/:id" element={<StatementPage handleShowStatement={handleShowStatement}  statement={statement} setStatement={setStatement} handleEdit={handleEdit} handleDelete={handleDelete}  handleChange={handleChange}/>} />
          <Route  path="/CreateProposal" element={<CreateProposal statement={statement} setStatement={setStatement} handleEdit={handleEdit} handleDelete={handleDelete}  handleChange={handleChange} />} />
        
        </Routes>
        {/* <Header />
        <LandingPage /> */}
        {/* </Routes> */} 
   </>
  );
}

export default App;
