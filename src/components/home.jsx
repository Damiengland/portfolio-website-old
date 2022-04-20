import React from "react";
import { motion } from "framer-motion"


function Home() {

    const transition = {duration: 2, type: "spring"}

    return (
        <section id="home">

            <div className="title">
                <motion.h1
                    animate={{ rotate: 360 }}
                    transition={transition}
                >
                D
                </motion.h1>
                <motion.h1
                    animate={{ rotate: 360 }}
                    transition={transition}
                >
                A
                </motion.h1>
                <motion.h1
                    animate={{ rotate: 360 }}
                    transition={transition}
                >
                M
                </motion.h1>
                <motion.h1
                    animate={{ rotate: 360 }}
                    transition={transition}
                >
                I
                </motion.h1>
                <motion.h1
                    animate={{ rotate: 360 }}
                    transition={transition}
                >
                E
                </motion.h1>
                <motion.h1
                    animate={{ rotate: 360 }}
                    transition={transition}
                >
                N
                </motion.h1>
            </div>

            <motion.div 
                className="socials"
                initial={{bottom: "-75px"}}
                whileInView={{bottom: "10px"}}
                transition={transition}
            >
                <a href="https://www.linkedin.com/in/damien-england-b67a3a141/" target="_blank" rel="noreferrer"><img src="images/linkedin.png" alt="githib logo"></img></a>
                <a href="https://github.com/Damiengland" target="_blank" rel="noreferrer"><img src="images/git.png" alt="githib logo"></img></a>
                <a href="https://www.imdb.com/name/nm11044479/" target="_blank" rel="noreferrer"><img src="images/imdb.png" alt="imdb logo"></img></a>
            </motion.div>
            
        </section>
    );
};


export default Home;