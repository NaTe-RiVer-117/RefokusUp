import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products.jsx";
import Marquees from "./components/Marquees.jsx";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Footer from "./components/Footer.jsx";
import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize locomotive scroll with responsive considerations
    const scroll = new LocomotiveScroll({
      smooth: true,
      smartphone: {
        smooth: false, // Disable smooth scrolling on mobile for better performance
      },
      tablet: {
        breakpoint: 768,
        smooth: true,
      },
    });

    // Simulate loading for better animation transitions
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    // Cleanup function
    return () => {
      if (scroll) scroll.destroy();
      clearTimeout(loadTimer);
    };
  }, []);

  return (
    <>
      {/* Simple loading screen */}
      {isLoading && (
        <div className="fixed inset-0 bg-slate-950 z-50 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <div className="w-full bg-slate-950 min-h-screen overflow-x-hidden">
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