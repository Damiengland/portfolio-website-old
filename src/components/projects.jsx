import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

function useWindowSize() {
    
    const [ size, setSize ] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth)
        };
        window.addEventListener('resize', handleResize);
    }, []);
    return size;
};


function Projects() {

    const width = useWindowSize();
    var slidesNum = 2;

    if (width <= 992 && width > 768) {
        slidesNum = 1.5;
    } else if (width <= 768 && width > 480) {
        slidesNum = 1;
    
    } else if (width <= 480) {
        slidesNum = 1.2;
    } else {
        slidesNum = 2;
    };

    return (
        <section id="projects">

            <h1>Recent Projects</h1>
            
            <div className="swiper-parent"> 
                <Swiper
                slidesPerView={slidesNum}
                spaceBetween={30}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper"
                >
                    <SwiperSlide>
                        <a href="https://github.com/Damiengland/food-freedom-flask" target="_blank" rel="noreferrer"><div className="proj-img"></div></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://github.com/Damiengland/pop-pygame" target="_blank" rel="noreferrer"><div className="proj-img"></div></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://github.com/Damiengland/sudoku-solver" target="_blank" rel="noreferrer"><div className="proj-img"></div></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://github.com/Damiengland/path-finding-visualizer" target="_blank" rel="noreferrer"><div className="proj-img"></div></a>
                    </SwiperSlide>
                </Swiper>
            </div>

            <button className="btn"><a className="no-a-style" href="https://github.com/Damiengland" target="_blank" rel="noreferrer"><p>VIEW ALL</p></a></button>

        </section>
    );
};


export default Projects;