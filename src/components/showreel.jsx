import React from "react";
import { motion } from "framer-motion"


function Showreel() {

    const transition = {duration: 1.5, type: "spring"}

    return (
        <section id="showreel">
        
        <motion.div 
            className="reel"
            initial={{ scale: 0.7 }}
            whileInView={{ scale: 1}}
            transition={transition}
        >
            <h1>Showreel</h1>
            <p>Coming 2022</p>
            
        </motion.div>

        <div className="row reel-info">

            <div className="col-4">
                <div className="reel-circle">
                    <h1>8</h1>
                </div>
                <p>Feature Films</p>
            </div>
            <div className="col-4">
                <div className="reel-circle">
                    <h1>6</h1>
                </div>
                <p>Marvel Films</p>
            </div>
            <div className="col-4">
                <div className="reel-circle">
                    <h1>4</h1>
                </div>
                <p>TV Series</p>
            </div>
           
        </div>

            
        <button disabled="true" className="btn"><p>BREAKDOWN</p></button>
        </section>
    );
};


export default Showreel;