import React, { useEffect, useRef, useState, lazy } from "react";
import "../../scss/core.scss"
import "../../scss/pages.scss"
import { AnimatePresence, motion } from "framer-motion";
import { Anim } from "../../Animation";
import { useTheme } from "../generic/ThemeContext";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";
import GridLayout from "react-grid-layout";

import Background from "../../img/team.webp"

import { IconContext } from "react-icons";
import { FaGithub, FaEnvelope } from 'react-icons/fa';


function Team(props: {}) {
    const theme = useTheme()
    const navigate = useNavigate()

    const layout = [
        { i: "a", x: 0, y: 0, w: 1, h: 1, static: true },
        { i: "b", x: 1, y: 0, w: 1, h: 1, static: true },
        { i: "c", x: 2, y: 0, w: 1, h: 1, static: true },
        { i: "d", x: 0, y: 1, w: 1, h: 1, static: true },
        { i: "e", x: 1, y: 1, w: 1, h: 1, static: true },
        { i: "f", x: 2, y: 1, w: 1, h: 1, static: true },
        { i: "g", x: 0, y: 2, w: 1, h: 1, static: true },
        { i: "h", x: 1, y: 2, w: 1, h: 1, static: true },
    ];
    useEffect(() => {
        theme.setLoadState(-2)
    }, [])
    return <div className="apex-users w-100 h-100 col-cc">
        <AnimatePresence>
            {theme.loadState === -2 &&
                <motion.div className="document col-st" variants={Anim.bounceY(1200).spring(240, 0, 30).build()}
                    initial="inactive" animate="active" exit="inactive"
                >
                    <div className="h0 oxanium bold col-cc" style={{
                        backgroundImage: `url(${Background})`,
                        backgroundSize: "100% auto",
                        backgroundPosition: "50% 50%",
                    }}>
                        Meet Our Team
                        {/* <motion.div className="back" tabIndex={0} onClick={() => {
                        theme.setLoadState(-1);
                        setTimeout(() => {
                            navigate("/");
                        }, 500)
                    }} whileHover={{boxShadow: "0 0 1rem white"}}>
                        {"<"}
                    </motion.div> */}
                    </div>
                    <GridLayout
                        className="layout"
                        layout={layout}
                        cols={3}
                        rowHeight={490}
                        width={1335}
                        containerPadding={[20, -10]}
                        margin={[20, 5]}
                    >
                        <div key="a">
                            <div className='profile'>
                                <a href="https://en.wikipedia.org/wiki/Bill_Gates">
                                    <img src={require("../../img/tymur.jpg")} />
                                </a>
                                <figcaption className="name oxanium bold"> Tymur Arsentiev <a href = "https://github.com/tymur999"> <FaGithub size = {".55em"}/>  </a> <a href = "mailto:tymur.arsentiev.org"> <FaEnvelope size = {".55em"} /> </a>  </figcaption>
                                <figcaption className="caption oxanium"> Senior in high school who enjoys math, science, and computer science. Experience with Python, ML/AI, React, and Firebase. Likes to bike and code in his free time. Will pursue Software Engineering in his future.   </figcaption>
                            </div>
                        </div>
                        <div key="b">
                            <div className='profile'>
                                <img src={require("../../img/rahil.jpg")} />
                                <figcaption className="name oxanium bold"> Rahil Sheth <a href = "https://github.com/RahilSheth12"> <FaGithub size = {".55em"}/>  </a> <a href = "mailto:rahil.sheth@vhhscougars.org"> <FaEnvelope size = {".55em"} /> </a> </figcaption>
                                <figcaption className="caption oxanium"> Senior in high school who is interested in computer science and math. Experience with Java, Javascript, Python, HTML/CSS, and React. Believes coding is an essential part of the modern era. Hopes to pursue a career in Software Engineering and ML/AI.  </figcaption>
                            </div>
                        </div>
                        <div key="c">
                            <div className='profile'>
                                <img src={require("../../img/kevin.jpg")} />
                                <figcaption className="name oxanium bold"> Kevin Ye <a href = "mailto:kevin.ye@vhhscougars.org"> <FaEnvelope size = {".55em"} /> </a>  </figcaption>
                                <figcaption className="caption oxanium"> Senior in high school who enjoys math, science, and computer science. Favorite coding languages are Python and Java. Believes that coding is an integral part of modern society. Hopes to pursue a job in the tech industry.</figcaption>
                            </div>
                        </div>
                        <div key="d">
                            <div className='profile'>
                                <img src={require("../../img/rudra.jpg")} />
                                <figcaption className="name oxanium bold"> Rudra Kukian  <a href = "mailto:rudra.kukian@vhhscougars.org"> <FaEnvelope size = {".55em"} /> </a>  </figcaption>
                                <figcaption className="caption oxanium"> Senior in high school who enjoys math and computer science. Experience with Java, Javascript, Python, HTML, and CSS. Believes computers are an crucial in society. Wishes to give back to the community and make sure kids have necessary resources to develop their interests. </figcaption>
                            </div>
                        </div>
                        <div key="e">
                            <div className='profile'>
                                <img src={require("../../img/tanishtemp.jpg")} />
                                    

                                <figcaption className="name oxanium bold"> Tanish Sharma <a href = "mailto:tanish.sharma@vhhscougars.org"> <FaEnvelope size = {".55em"} /> </a> </figcaption>
                                <figcaption className="caption oxanium"> Senior in high school who enjoys math, physics, and computer science. Experience with Java, Python, HTML, and Javascript. Believes the CS industry is immense and will be essential to society in the future. Hopes to pursue a career as a software engineer.  </figcaption>
                            </div>
                        </div>
                        <div key="f">
                            <div className='profile'>
                                <img src={require("../../img/dmitriy.PNG")} />
                                <figcaption className="name oxanium bold"> Dmitriy Shor <a href = "https://github.com/DmitriyShor23"> <FaGithub size = {".55em"}/>  </a> <a href = "mailto:dmitriy.shor@vhhscougars.org"> <FaEnvelope size = {".55em"} /> </a> </figcaption>
                                <figcaption className="caption oxanium">Senior in high school who enjoys math and computer engineering. Experience with Java, Python, HTML, CSS, Javascript, and Arduino. Currently building projects with Arduinos. Hopes to pursue a robotics related career. </figcaption>
                            </div>
                        </div>
                        <div key="g">
                            <div className='profile'>
                                <img src={require("../../img/jae.PNG")} />
                                <figcaption className="name oxanium bold"> Jae Park <a href = "https://github.com/jaepark23"> <FaGithub size = {".55em"}/>  </a> <a href = "mailto:jae.park@vhhscougars.org"> <FaEnvelope size = {".55em"} /> </a> </figcaption>
                                <figcaption className="caption oxanium"> Senior in high school who enjoys computer science and math. Experience with Python, React, Java, Javascript, and ML. Believes CS will be vital for the future. Hopes to create a company that provides a product/service that positively impacts peoples' lives.</figcaption>
                            </div>
                        </div>
                        <div key="h">
                            <div className='profile'>
                                <img src={require("../../img/kartik.jpg")} />
                                <figcaption className="name oxanium bold"> Kartik Vasudeva <a href = "https://github.com/kartikvasudeva"> <FaGithub size = {".55em"}/>  </a> <a href = "mailto:kartik.vasudeva@vhhscougars.org"> <FaEnvelope size = {".55em"} /> </a> </figcaption>
                                <figcaption className="caption oxanium"> Junior in high school who enjoys math, computer science, and physics. Experience with Java, Javascript, Python, and HTML. Believes computers are a crucial component in society today and will only continue to be more important. Looking to attend a top-tier college for a degree in computer science or data science.</figcaption>
                            </div>
                        </div>
                    </GridLayout>
                    <motion.div tabIndex={0} onClick={() => window.open("mailto:adam.lueken@d128.org")} className="click-to col-cc oxanium h6 bold w-100 text-centered" whileHover={{ boxShadow: "0 0 1rem white" }}>
                        Click to contact Adam Lueken (adam.lueken@d128.org) for more information.
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    </div>
}
export default Team;