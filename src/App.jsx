import { useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products.jsx";
import Marquees from "./components/Marquees.jsx";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Footer from "./components/Footer.jsx";
import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Required for smooth scrolling

function App() {

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      smooth: true, // <--- This is the only essential option
    });
  }, []);

 

  return (
    <>
      <div className="w-full bg-slate-950 ">
        <Navbar />
        <Work />
        <Stripes />
        <Products />
        <Marquees />
        <Cards />
        <Footer />
      </div>
    </>
  );
}

export default App;
