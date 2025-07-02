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

function App() {
  return (
    <>
    <NoteState>
   <Router>
<Navbar/>
<div className="container">
    <Routes>
  <Route exact path="/about" element={<About />} />
  <Route exact path="/" element={<Home />} />

  
</Routes>
</div>
</Router>

</NoteState>
    </>
  );
}

export default App;
