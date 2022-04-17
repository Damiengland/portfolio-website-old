import React from "react";


function Services() {
    return (
        <section id="services">
            <div className="col-6 service-info">
                <h1>My Services</h1>
                <p className="p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className="btn"><p>HIRE ME</p></button>
            </div>
            <div className="col-3">

                <div className="card">
                    <i className="fa-solid fa-code fa-3x"></i>
                    <h1>Developer</h1>
                    <p>Html, Css, JavaScript, React, NodeJs, Flask, Python, Motoko</p>
                </div>
                
            </div>
            <div className="col-3 right-col">
                
                <div className="card">
                    <i className="fa-solid fa-bezier-curve fa-3x"></i>
                    <h1>Designer</h1>
                    <p>Adobe Photoshop, Adobe XD, Adobe Illustrator…</p>
                </div>
                <div className="card">
                    <i className="fa-solid fa-layer-group fa-3x"></i>
                    <h1>Compositor</h1>
                    <p>Nuke, DaVinci, Adobe PP</p>
                </div>

            </div>
              
        </section>
    );
};


export default Services