import { useState } from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products.jsx";
import Marquees from "./components/Marquees.jsx";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-slate-950 overflow-y-auto animated-scrollbar">
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
