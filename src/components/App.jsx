import React from "react";
import Navigation from "./navigation";
import Home from "./home";
import Services from "./services";
import Showreel from "./showreel";
import Productions from "./productions";
import Projects from "./projects";
import About from "./about";
import Footer from "./footer";


function App() {
    return (
        <div className="parent">
            <Navigation/>
            <div className="content">
                <Home/>
                <Services/>
                <Showreel/>
                <Productions/>
                <Projects/>
                <About/>
                <Footer/>
            </div>
        </div>
    )
};


export default App