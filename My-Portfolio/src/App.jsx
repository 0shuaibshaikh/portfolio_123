import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import DownloadCVButton from "./components/DownloadCVButton";


import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
      <div>
       
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
       <DownloadCVButton/>
        <Footer />
        
           </div>
      <Toaster />
    </>
  );
}

export default App;
