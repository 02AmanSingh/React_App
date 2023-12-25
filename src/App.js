// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [txt, setTxt] = useState('light mode enabled');
  const [myStyle, setStyle] = useState({
    color: 'black',
  })
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      setTxt('dark mode enabled');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", 'Success');
      setStyle({
        color: 'white',
      })
    }
    else {
      setmode('light');
      setTxt(' light mode enabled');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'Success');
      setStyle({
        color: 'black',
      })
    }
  }
  return (
    <>
        {/* <Navbar title="Navbar2" features='Features2'/> */}
        {/* <Navbar/> */}
      <Router>
        <Navbar title="Navbar" mode={mode} toggleMode={toggleMode} txt={txt} myStyle={myStyle} />
        <Alert alert={alert} />

        {/* <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
            </ul>
          </nav>
        </div> */}


        <div className='container'>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm heading='TextUtils' showAlert='showAlert' mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}


export default App;
