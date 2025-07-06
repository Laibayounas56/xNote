import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import {
  BrowserRouter as Router,
  Routes,   
  Route
} from "react-router-dom"
import Alert from './components/Alert';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
    <NoteState>
   <Router>
<Navbar/>
<Alert/>
<div className="container">
    <Routes>
  <Route exact path="/about" element={<About />} />
  <Route exact path="/" element={<Home />} />
  <Route exact path="/login" element={<Login/>} />
  <Route exact path="/signUp" element={<SignUp/>} />


  
</Routes>
</div>
</Router>

</NoteState>
    </>
  );
}

export default App;
