import React from "react";


function About() {
    return (
        <section id="about">
            <div className="col-6">
                <h1>Who am i?</h1>
                <p className="p-content">I'm Damien, a VFX Artist, developer and web designer based in Sydney's Northern Beaches.<br/>
                    I have extensive experience as a Digital Compositor, having had the pleasure of working on globally successful feature films and series, including Spider-man No Way Home, Eternals and Loki.<br/>
                    I have an arsenal of Digital software knowledge and am trained in both 2D and 3D image manipulation.  
                    Aside from working as a digital artist, I am also developer. I have a versatile skill set and am adept at Full Stacked Web Development, Python Programing & Game Dev, IOS Development and Web3 Development. I have a huge passion for Web3 / Blockchain Development.<br/>
                    My role as a Digital Compositor inspired my interest in code. I am constantly learning, researching and developing my skills to hone my craft.</p>
            </div>
            <div className="col-6">
                <form>
                    <label for="f-name"><p>Name</p></label>
                    <input type="text" class="form-control" id="f-name" placeholder="Full Name"/>
                    <label for="f-email"><p>Email address</p></label>
                    <input type="email" class="form-control" id="f-email" placeholder="name@example.com"/>
                    <label for="f-text-box"><p>Message</p></label>
                    <textarea class="form-control" id="f-text-box" rows="3"></textarea>
                    <button type="submit" class="btn">GET IN TOUCH</button>
                </form>

            </div>

        </section>
    );
};


export default About;