import React, { useEffect, useRef, useState } from "react";
import "../../scss/core.scss"
import "../../scss/pages.scss"
import { AnimatePresence, motion } from "framer-motion";
import { Anim } from "../../Animation";
import { useTheme } from "./ThemeContext";
import { useNavigate } from "react-router-dom";

import "../../img/image1.png"
import Background from "../../img/team.jpg"
import "../../img/elon.jpg"
function Project(props: {p1: string[], p2: string[], p3: string[]}) {

    const theme = useTheme()
    const navigate = useNavigate()

    useEffect(() => {
        theme.setLoadState(-2)
    }, [])

    return (
        <div className="apex-users w-100 h-100 col-cc">
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
                    <motion.div className="back" tabIndex={0} onClick={() => {
                        theme.setLoadState(-1);
                        setTimeout(() => {
                            navigate("/");
                        }, 500)
                    }} whileHover={{boxShadow: "0 0 1rem white"}}>
                        {"<"}
                    </motion.div>
                </div>

                <div className="list row-bc">
                    <div className= "img-with-text">
                        <img src = {props.p1[0]} />
                        <figcaption className = "name oxanium bold"> {props.p1[1]} </figcaption>
                        <figcaption className = "oxanium"> {props.p1[2]}</figcaption>
                    </div>
                    
                    <div className= "img-with-text">
                        <img src = {props.p2[0]} />
                        <figcaption className = "name oxanium bold"> {props.p2[1]} </figcaption>
                        <figcaption className = "oxanium"> {props.p2[2]}</figcaption>
                    </div>
                    
                    <div className= "img-with-text">
                        <img src = {props.p3[0]} />
                        <figcaption className = "name oxanium bold"> {props.p3[1]} </figcaption>
                        <figcaption className = "oxanium"> {props.p3[2]}</figcaption>
                    </div>
                </div>
                

                <motion.div tabIndex={0} onClick={() => window.open("mailto:drshika.asher@vhhscougars.org")} className="click-to col-cc oxanium h6 bold w-100 text-centered" whileHover={{boxShadow: "0 0 1rem white"}}>
                    Click to contact Drshika Asher (drshika.asher@vhhscougars.org) for more information.
                </motion.div>
            </motion.div>
        }
        </AnimatePresence>
    </div>
)}


export default Project