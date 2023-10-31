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

import { Navigation, Pagination, Autoplay } from "swiper";

import "../../img/image1.png"
import "../../img/elon.webp"
import "../../img/lueken.jpg"
import "../../img/elon.jpg"
import Background from "../../img/team.jpg"

const People = lazy(() => import("../generic/People"))

function Users2(props: {}) {

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
    <Swiper pagination={pagination} loop={true} autoplay = {{delay: 8000, disableOnInteraction: false }} slidesPerView = {1} navigation={true} modules={[Navigation, Pagination, Autoplay]} className="mySwiper">
        <SwiperSlide> <People p1 = {[require("../../img/elon.jpg"), "Elon Musk", "CEO of Tesla and SpaceX. Fluent in everything"]} p2 = {[require("../../img/elon.jpg"), "Elon Musk", "CEO of Tesla and SpaceX. Fluent in everything"]} p3 = {[require("../../img/elon.jpg"), "Elon Musk", "CEO of Tesla and SpaceX. Fluent in everything"]}/> </SwiperSlide>
        <SwiperSlide> <People p1 = {[require("../../img/elon.jpg"), "Elon Musk", "CEO of Tesla and SpaceX. Fluent in everything"]} p2 = {[require("../../img/elon.jpg"), "Elon Musk", "CEO of Tesla and SpaceX. Fluent in everything"]} p3 = {[require("../../img/elon.jpg"), "Elon Musk", "CEO of Tesla and SpaceX. Fluent in everything"]}/> </SwiperSlide>
        </Swiper>
    )
}

export default Users2;