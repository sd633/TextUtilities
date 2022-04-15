import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react';
// import Alert from './components/Alert';
// import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'


function App() {
  const [mode, setMode] = useState('light');
  // const [alert, setAlert] =useState(null);

  // const showAlert = (message, type)=>{
  //  setAlert({ 
  //   msg: message,
  //   type: type})
  // }

  const toggleMode= ()=>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#04285c';    
        document.title = 'textutils-dark mode';
        // showAlert("Dark mode has been enabled", "success");  
      }
      else{
        setMode('light')
        document.body.style.backgroundColor = 'white';
        document.title = 'textutils';
        // showAlert("Light mode has been enabled","success");
      }
  }

  // const toggleMode2 =()=>{
  //   if(mode === 'light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#017b42';
  //   }
  //   else{
  //     setMode('light')
  //     document.body.style.backgroundColor = 'white';
  //   }
  // }
  return (
    <div><Navbar title="Textutils" aboutText="About Textutils" mode= {mode} toggleMode = {toggleMode} /*toggleMode2 = {toggleMode2}*//>
      
    <div className = "container my-3">
    <Textform heading="Enter text to analyze"  mode={mode}/>
    </div> </div>
      
  );
}

export default App;
