import React, {useEffect, useRef, useState} from "react";
import "../../scss/core.scss"
import "../../scss/pages.scss"
import {AnimatePresence, motion} from "framer-motion";
import {Anim} from "../../Animation";
import {useTheme} from "../generic/ThemeContext";
import {useNavigate} from "react-router-dom";

function Consulting(props: {}) {

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
                    backgroundImage: "url(\"https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2021/06/24144753/consulting-jobs-1024x512-b-1-1.jpeg\")",
                    backgroundSize: "100% auto",
                    backgroundPosition: "50% 35%",
                }}>
                    Consulting
                    <motion.div className="back" tabIndex={0} onClick={() => {
                        theme.setLoadState(-1);
                        setTimeout(() => {
                            navigate("/");
                        }, 500)
                    }} whileHover={{boxShadow: "0 0 1rem white"}}>
                        {"<"}
                    </motion.div>
                </div>
                <div className="oxanium h6 explanation" style={{marginTop: "3rem"}}>
                    Our CS students at Vernon Hills High School are future leaders, with vast skillsets, powerful perspectives, and unique solutions. Let them help you with your next technological endeavor.
                    <br/><br/>
                    Click <a href="https://docs.google.com/document/d/1TAQJr0Sepf04azuPkkiu9B8wU112wVNsDtqyGwv5qEs/edit" target={"_blank"}>here</a> to see student work!
                </div>
                <div className="list row-bs" style={{marginTop: "2rem"}}>
                    <div className="col-cs w-50">
                        <div className="oxanium h3">
                            Local Businesses
                        </div>
                        <ul className="oxanium h6">
                            <li>
                                If you have a request for our students, email us with the following:
                            </li>
                            <li>
                                <strong>Requirements</strong>: What is your project goal? What deadlines do you have?
                            </li>
                            <li>
                                <strong>Compensation</strong>: How will our students be rewarded?
                            </li>
                            <li>
                                <strong>Contact</strong>: How will our students contact you?
                            </li>
                            <li>
                                <strong>Prototype</strong> (optional): Do you have a preexisting product that we could modify instead?
                            </li>
                        </ul>
                    </div>
                    <div className="col-cs w-50">
                        <div className="oxanium h3">
                            Students
                        </div>
                        <ul className="oxanium h6">
                            <li>
                                If you would like to work with a business, email us with the following:
                            </li>
                            <li>
                                <strong>Languages</strong>: What languages do you know? At what level?
                            </li>
                            <li>
                                <strong>Interests</strong>: What industries and fields interest you?
                            </li>
                            <li>
                                <strong>Experiences</strong> (optional): Any personal projects, websites, prototypes, resumes, etc.
                            </li>
                        </ul>
                    </div>
                </div>
                <motion.div tabIndex={0} onClick={() => window.open("mailto:drshika.asher@vhhscougars.org")} className="click-to col-cc oxanium h6 bold w-100 text-centered" whileHover={{boxShadow: "0 0 1rem white"}}>
                    Click to contact Adam Lueken (adam.lueken@d128.org) with more information.
                </motion.div>
            </motion.div>
            }
        </AnimatePresence>
    </div>
}

export default Consulting;
