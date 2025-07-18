import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';

import NoteState from './context/notes/NoteState';

import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Alert from './components/Alert';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    })

    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route exact path="/about" element={<About />} />
              <Route exact path="/" element={<ProtectedRoute>   <Home showAlert={showAlert} />
              </ProtectedRoute>
              }
              />
              <Route exact path="/login" element={<Login showAlert={showAlert} />} />
              <Route exact path="/signUp" element={<SignUp showAlert={showAlert} />} />



            </Routes>
          </div>
        </Router>

      </NoteState>
    </>
  );
}

export default App;
