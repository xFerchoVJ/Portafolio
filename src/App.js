import React from "react";
import Header from "./components/Header";
import Navegation from "./components/Navegation";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navegation />
      <Header />
      <Services />
      <Experience />
      <Footer/>
    </>
  );
}

export default App;
