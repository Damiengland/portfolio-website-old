import React from "react";


function Showreel() {
    return (
        <section id="showreel">
        
        <div className="reel">
            <h1>Showreel</h1>
            
        </div>

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

            
        <button className="btn"><p>BREAKDOWN</p></button>
        </section>
    );
};


export default Showreel;