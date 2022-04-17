import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from "swiper";
import 'swiper/css';
import "swiper/css/effect-cards";


function Productions() {
    return (
        <section id="productions">
            <div className="col-6">
                <h1>Global</h1>
                <h1>Productions</h1>
                <p className="p-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className="btn"><p>VIEW ALL</p></button>
            </div>
            <div className="col-6">
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
  
        </section>
    );
};


export default Productions;