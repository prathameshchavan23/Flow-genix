import "./App.css";
import Navbar from "./components/Navbar";
import Stripes from "./components/Stripes";
import Work from "./components/Work";
import Products from "./components/Products";
import Marques from "./components/Marques";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import {  useRef } from "react";

function App() {
  const scroll = new LocomotiveScroll();
  const containerRef = useRef(null);
  
 

  return (
    <div className="overflow-hidden">
      <div ref={containerRef} data-scroll-container className="wrapper">
        <div className="w-screen min-h-screen bg-zinc-900 font-[satoshi_variable] overflow-x-hidden">
          <Navbar />
          <Work />
          <Stripes />
          <Products />
          <Marques />
          <Cards />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
