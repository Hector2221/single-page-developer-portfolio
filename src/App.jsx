import React from "react";
import { Header } from "./components/header/Header"
import { Footer } from "./components/footer/Footer"
import { About } from "./components/about/About"
import { Proyects } from "./components/proyects/Proyects"

function App() {
  return (
    <React.Fragment>
      <Header/>
      <About/>
      <Proyects/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
