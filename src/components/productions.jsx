import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from "swiper";
import 'swiper/css';
import "swiper/css/effect-cards";


function Productions() {

    return (
        <section id="productions">
            <div className="row">
            <div className="col-md-6 col-sm-12">
                <h1>Global</h1>
                <h1>Productions</h1>
                <p className="p-content">I have had the privilege to work on Oscar Nominated Films such as King Richard & Spiderman No Way Home along side globally successful feature films and series as a Digital Compositor.</p>
                <button className="btn"><a className="no-a-style" href="https://www.imdb.com/name/nm11044479/" target="_blank" rel="noreferrer"><p>VIEW ALL</p></a></button>
            </div>
            <div 
                className="col-md-6 col-sm-12 motion-container"
            >
                <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="prod-swiper"
                >
                    <SwiperSlide className="prod-slider"></SwiperSlide>
                    <SwiperSlide className="prod-slider"></SwiperSlide>
                    <SwiperSlide className="prod-slider"></SwiperSlide>
                    <SwiperSlide className="prod-slider"></SwiperSlide>
                    <SwiperSlide className="prod-slider"></SwiperSlide>
                    <SwiperSlide className="prod-slider"></SwiperSlide>
                    <SwiperSlide className="prod-slider"></SwiperSlide>
                    <SwiperSlide className="prod-slider"></SwiperSlide>
                    <SwiperSlide className="prod-slider"></SwiperSlide>
                </Swiper>
            </div>
        </div>
  
        </section>
    );
};


export default Productions;