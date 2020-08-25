import React, { useState, useEffect } from "react";
import "./App.css";
import "tachyons";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navbar/navbar";
import About from "./components/About/About";
import Project from "./components/Projects/Projects";
import Academics from "./components/Academics/Academics";
import Contact from "./components/Contact/Contact";

function App() {
  const [route, setRoute] = useState("/Portfolio");
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
    setRoute(window.location.pathname);
  }, []);
  console.log(route)
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      {route === "/Porfolio/projects" ? (
        <Project />
      ) : route === "/Porfolio/academics" ? (
        <Academics />
      ) : route === "/Porfolio/contact" ? (
        <Contact />
      ) : (
        <About />
      )}
    </div>
  );
}

export default App;
