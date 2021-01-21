 import React from "react";

import Sections from "./components/Sections.js";
import NavBar from "./components/NavBar.js";
import Banner from "./components/Banner.js";
import Bio from  "./components/Bio.js";
import ContactForm from "./components/ContactForm.js";

import dataSections from "./dataSections.js"
import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Sections dataSections={dataSections} />
        <Banner />
        <Bio />
        <ContactForm />
    </div>
  );
}

export default App;
