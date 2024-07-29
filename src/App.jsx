// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import MyWork from "./Components/MyWork/MyWork";
// import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <MyWork />
    </>
  );
};

export default App;
