import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
const App = () => {
  return <div className="overflow-hidden max-w-[1500px] mx-auto min-h-screen relative">
        <Router>
        <Navbar />
        <Sidebar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        <Footer />
        </Router>
  </div>;
};

export default App;
