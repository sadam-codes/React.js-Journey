import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Github from "./components/Github";
import User from "./components/User";
import Contact from "./components/Contact";
import NoPageFound from "./components/NoPageFound";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/github" element={<Github />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="user/:userid" element={<User />} />
          <Route exact path="*" element={<NoPageFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
