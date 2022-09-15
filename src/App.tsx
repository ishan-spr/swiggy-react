import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import HeroComponent from "./components/HeroComponent";
import InformationGrid from "./components/InformationGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <HeroComponent />
      <InformationGrid />
      <Footer />
    </Fragment>
  );
}

export default App;
