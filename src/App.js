import logo from './logo.svg';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import './App.css';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] =  useState(null);

  const showAlert =(message, type) =>{
    setAlert({
      msg : message,
      type: type
      })

      setTimeout( () =>{
        setAlert(null)}
        ,3000
      )
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.background = 'black'
      showAlert('Dark Mode has been enable', 'success')
      document.title = 'Dark Mode'
    }else{
      setMode('light')
      document.body.style.background = 'white'
      showAlert('Light Mode has been enable', 'success')
      document.title = 'Light Mode'
    }
  }
  return (
  <>
    <Router>
    <Navbar title = "Test" aboutText= "About him" mode = {mode} toggleMode = {toggleMode} />
    <Alert alert = {alert} />
    <div className="container mt-3">
      <Routes>
        <Route exact path='/about' element= {<About mode = {mode}/>}></Route>
        <Route path='/' element = {<TextForm mode = {mode} showAlert= {showAlert} heading = "Enter the text to write some thing"/>}></Route> 
      </Routes>  
      
    </div>
    </Router>
  </>
  );
}

export default App;
