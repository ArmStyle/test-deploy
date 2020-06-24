import React from "react";
import "./App.css";
import Home from "./containers/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route path="/" exact component={Home} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
