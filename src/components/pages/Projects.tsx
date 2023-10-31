import React, {useEffect, useRef, useState, lazy} from "react";
import "../../scss/core.scss"
import "../../scss/pages.scss"
import {AnimatePresence, motion} from "framer-motion";
import {Anim} from "../../Animation";
import {useTheme} from "../generic/ThemeContext";
import {useNavigate} from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../scss/swiper.scss"

import { Navigation, Pagination, Autoplay } from "swiper";

const Project = lazy(() => import("../generic/Project"))

function Projects(props: {}) {

    const theme = useTheme()
    const navigate = useNavigate()

    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };

    useEffect(() => {
        theme.setLoadState(-2)
    }, [])

    return (
        // 1100x1200 resolution for images 
      <Swiper pagination={pagination} loop={true} autoplay = {{delay: 150000, pauseOnMouseEnter: true }} slidesPerView = {1} navigation={true} modules={[Navigation,  Autoplay]} className="mySwiper">
              <SwiperSlide> <Project name = "Storelytics" img = {require("../../img/storelytics.jpg")} creator = "test" points = {["iOS based app built using Python and React-Native", "Uses machine learning to detect peoples' faces going in and out of a store", "Tracks how many people come in and out of a store and at what time they come in and out"]}/> </SwiperSlide> 
            <SwiperSlide> <Project name = "Data Managers Inc" img = {require("../../img/image1.png")} creator = "test" points = {["Android based app coded using Java", "Helps sales people at the register identify items", "Users are able to use their voice or text to look up their inventory"]}/> </SwiperSlide>
            <SwiperSlide> <Project name = "DMV Hours Tracker" img = {require("../../img/image7.png")} creator = "test" points = {["iOS based app coded using React-Native and Expo", "Helps students track driving hours for their license", "Utilizes Firebase backend to authenticate users and store user data"]}/> </SwiperSlide> 
            <SwiperSlide> <Project name = "Monkey Say Monkey Do" img = {require("../../img/monke.webp")} creator = "test" points = {["iOS based app coded using Swift", "Helps children practice their pronunciation of certain word sounds through fun and interactive games", "Uses statistics to track how much they have practiced different sound groups"]}/> </SwiperSlide> 
          
    
        </Swiper>
    )
}

export default Projects;
