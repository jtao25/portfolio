import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="nav-bar">
          <img
            src={`${process.env.PUBLIC_URL}/assets/Ellipse1.svg`}
            alt="Description"
          />
          <Link to="/">work</Link>
          <Link to="/about">about</Link>
          <Link to="/resume">resume</Link>
        </nav>

        <div className="content">
          <Routes>
            {/* Define your routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </div>
      <nav>
        <Link to="/">work</Link>
        <Link to="/about">about</Link>
        <Link to="/resume">resume</Link>
      </nav>
    </Router>
  );
}

export default App;
