import React, {useEffect, useRef, useState} from "react";
import "../../scss/core.scss"
import "../../scss/pages.scss"
import {AnimatePresence, motion} from "framer-motion";
import {Anim} from "../../Animation";
import {useTheme} from "../generic/ThemeContext";
import {useNavigate} from "react-router-dom";

function Coding(props: {}) {

    const theme = useTheme()
    const navigate = useNavigate()

    useEffect(() => {
        theme.setLoadState(-2)
    }, [])

    return <div className="apex-coding w-100 h-100 col-cc">
        <AnimatePresence>
        { theme.loadState === -2 &&
            <motion.div className="document col-st" variants={Anim.bounceY(1200).spring(240, 0, 30).build()}
                        initial="inactive" animate="active" exit="inactive"
            >
                <div className="h0 oxanium bold col-cc" style={{
                    backgroundImage: "url(\"https://campussuite-storage.s3.amazonaws.com/prod/1059662/301794b6-30da-11e7-9e05-124f7febbf4a/1811609/d77e7936-9ff2-11e8-8fd6-120544974b42/optimizations/1\")",
                    backgroundSize: "100% auto",
                    backgroundPosition: "50% 50%",
                }}>
                    Coding
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
                    <ul className="oxanium h3">
                        <li>
                            Weekday afternoons, location TBA
                        </li>
                        <li>
                            12 sessions, rate TBA
                        </li>
                        <li>
                            Python, JavaScript, and Java classes
                        </li>
                        <li>
                            Taught by advanced VHHS CS students
                        </li>
                    </ul>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5908.8370370839875!2d-87.949139!3d42.226871!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f9619efb8b969%3A0x43438e5e609847e1!2s145%20Lakeview%20Pkwy%2C%20Vernon%20Hills%2C%20IL%2060061!5e0!3m2!1sen!2sus!4v1656493321759!5m2!1sen!2sus"
                        style={{border:0}} allowFullScreen={false} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" />
                </div>
                <motion.div tabIndex={0} onClick={() => window.open("mailto:adam.lueken@d128.org")} className="click-to col-cc oxanium h6 bold w-100 text-centered" whileHover={{boxShadow: "0 0 1rem white"}}>
                    Click to contact Adam Lueken (adam.lueken@d128.org) for more information.
                </motion.div>
            </motion.div>
        }
        </AnimatePresence>
    </div>
}

export default Coding;