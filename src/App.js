
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react'
import Alert from './component/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light');//whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode=()=>{
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("dark mode has been enabled","success");
      document.title='TextUtils-Dark Mode';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success");
      document.title='TextUtils-light Mode';
    }
  }
  return (
    <>
    {/* <Router> */}
      {/* <Navbar title="TextUtil" about="about us"/>  */}
      {/* <Navbar/>     */}
      <Navbar title="TextUtil"  mode={mode} toggleMode={toggleMode}/> 
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch>
          <Route exact path="/about"> */}
            {/* <About/> */}
          {/* </Route>
          <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
          {/* </Route>
        </Switch> */}
      </div>
      {/* </Router> */}
     
    </>
  );
}

export default App;
