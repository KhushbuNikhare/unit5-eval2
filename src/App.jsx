//import logo from './logo.svg';
import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Action } from "./redux/Action";

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/Navbar" element={<Navbar />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
