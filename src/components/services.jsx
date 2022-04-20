import React from "react";
import { motion } from "framer-motion"


function Services() {

    const transition = {duration: 2, type: "spring"}

    return (
        <section id="services">
            <div className="col-lg-6 col-md-6 col-sm-12 service-info">
                <h1>My Services</h1>
                <p className="p-content">My wide range of software knowledge ranging from Design all the way through to full Development allows me to provide the necessary services every step of the way.</p>
                <button className="btn"><p>HIRE ME</p></button>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 service-cards">
                <motion.div
                    className="motion-container"
                    initial={{left: "200px"}}
                    whileInView={{left: "0"}}
                    transition={transition}
                >
                    <div className="card">
                        {/* <i className="fa-solid fa-code fa-3x"></i> */}
                        <h1>Developer</h1>
                        <p className="service-card-info">Html, Css, JavaScript, React, NodeJs, Flask, Python, Motoko</p>
                    </div>
                    <div className="card">
                        {/* <i className="fa-solid fa-bezier-curve fa-3x"></i> */}
                        <h1>Designer</h1>
                        <p className="service-card-info">Adobe Photoshop, Adobe XD, Adobe Illustrator…</p>
                    </div>
                    <div className="card">
                        {/* <i className="fa-solid fa-layer-group fa-3x"></i> */}
                        <h1>Compositor</h1>
                        <p className="service-card-info">Nuke, DaVinci, Adobe PP</p>
                    </div>
                </motion.div>

            </div>
              
        </section>
    );
};


export default Services