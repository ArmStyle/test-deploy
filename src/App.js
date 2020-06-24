import React from "react";
import "./App.css";
import Home from "./containers/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutUs from "./containers/AboutUs";
import ContactUS from "./containers/ContactUS";
import Post from "./containers/Post";
import Posts from "./containers/Posts";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />

        <Route path="/" exact component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact-us" component={ContactUS} />
        <Route path="/posts" component={Posts} />
        <Route path="/post/:slug" component={Post} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
