import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [cmode, setcMode] = useState('primary');
  const [alert, setAlert] = useState(null);

  const redMode = () => {
    setcMode('danger');
    // setMode('dark');
    document.body.style.backgroundColor = '#b02a37';
  }
  const greenMode = () => {
    setcMode('success');
    // setMode('dark');
    document.body.style.backgroundColor = '#149056';
  }
  const blueMode = () => {
    setcMode('primary');
    // setMode('dark');
    document.body.style.backgroundColor = '#0a58ca';
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode !== 'dark') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529'
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="Text Utils" aboutText="About" mode={mode} redMode={redMode} greenMode={greenMode} blueMode={blueMode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/"
              element={<TextForm heading="Enter the text to analyze below" mode={mode} cmode={cmode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
