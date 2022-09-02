import {useState, useEffect} from "react";
// import Header from "./components/Header/Header"
// import LandingPage from "./components/LandingPage/LandingPage";
import Landing from "./pages/Landing/LandingPage";
import ViewStatements from "./pages/ViewStatements/ViewStatements";
import CreateProposal from "./pages/CreateProposal/CreateProposal";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  // const [statement, setStatement] = useState({
  //   statementName: "",
  //   volume: "",
  //   fees:"",
  //   transactionsNumber: "",

  // })

  // useEffect(() => {
  //   async function getAppData(){
  //    const statements = await  fetch("http://localhost:3001/api/statements")
  //     .then(res => res.json())
  //     console.log(statements)

    
  //   }


  //   getAppData()

  // },[])


  return (
    <>
    <Routes >
      <Route  path="/" element={<Landing />} />
      <Route  path="/ViewStatements" element={<ViewStatements  />} />
      <Route  path="/CreateProposal" element={<CreateProposal />} />
    

    {/* <Header />
    <LandingPage /> */}
    </Routes>
   
   </>
  );
}

export default App;
