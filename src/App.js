import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom'
import Inicio from "./components/Inicio";
import Proyectos from "./components/Proyectos";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element ={<Inicio/>}/>
        <Route path="/proyectos" element= {<Proyectos/>}/>
      </Routes>
    </Router>
  );
}

export default App;
