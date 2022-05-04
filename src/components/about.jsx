import React from "react";


function About() {
    return (
        <section id="about">
        <div className="row">
            <div className="col-lg-6 col-md-12">
                <h1>Who am i?</h1>
                <p className="p-content">I'm Damien, a VFX Artist, developer and web designer based in Sydney's Northern Beaches.<br/>
                    I have extensive experience as a Digital Compositor, having had the pleasure of working on globally successful feature films and series, including Spider-man No Way Home, Eternals and Loki.<br/>
                    I have an arsenal of Digital software knowledge and am trained in both 2D and 3D image manipulation.  
                    Aside from working as a digital artist, I am also developer. I have a versatile skill set and am adept at Full Stacked Web Development, Python Programing & Game Dev, IOS Development and Web3 Development. I have a huge passion for Web3 / Blockchain Development.<br/>
                    My role as a Digital Compositor inspired my interest in code. I am constantly learning, researching and developing my skills to hone my craft.</p>
            </div>
            <div className="col-lg-6 col-md-12">
                {/* <form>
                    <label htmlFor="f-name"><p>Name</p></label>
                    <input type="text" className="form-control" id="f-name" placeholder="Full Name"/>
                    <label htmlFor="f-email"><p>Email address</p></label>
                    <input type="email" className="form-control" id="f-email" placeholder="name@example.com"/>
                    <label htmlFor="f-text-box"><p>Message</p></label>
                    <textarea className="form-control" id="f-text-box" rows="3"></textarea>
                    <button type="submit" className="btn">GET IN TOUCH</button>
                </form> */}
                <h1 className="get-in-touch">get in touch!</h1>
                <p className="p-content">Have somthing exciting in the works and want my help? Reach out on LinkedIn or send me an email</p>
                <div className="social-icons">
                    <a href = "mailto: damien.england@icloud.com"><i className="fa-solid fa-envelope fa-4x social-icon"></i></a>
                    <a href="https://www.linkedin.com/in/damien-england-b67a3a141/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in fa-4x social-icon"></i></a>
                </div>
            </div>
            </div>

        </section>
    );
};


export default About;