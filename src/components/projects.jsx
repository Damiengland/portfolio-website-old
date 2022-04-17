import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function Projects() {

    return (
        <section id="projects">

            <h1>Recent Projects</h1>
            
            <div className="swiper-parent"> 
                <Swiper
                spaceBetween={25}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><div className="slider">Slider 1</div></SwiperSlide>
                    <SwiperSlide><div className="slider">Slider 1</div></SwiperSlide>
                    <SwiperSlide><div className="slider">Slider 1</div></SwiperSlide>
                    <SwiperSlide><div className="slider">Slider 1</div></SwiperSlide>
                </Swiper>
            </div>

            <button className="btn"><p>VIEW ALL</p></button>

        </section>
    );
};


export default Projects;