import React, {useRef, useState} from "react";
import "../../scss/core.scss"
import "../../scss/pages.scss"
import {AnimatePresence, motion} from "framer-motion";
import {Anim} from "../../Animation";
import {useInView} from "react-intersection-observer";
import Loading from "../generic/Loading";
import ParticleWrapper from "../generic/ParticleWrapper";
import {useTheme} from "../generic/ThemeContext";
import {useNavigate} from "react-router-dom";
import consultImg from "../../img/consult.jpg";
import codeImg from "../../img/code.png";

function Home(props: {

}) {

    const theme = useTheme();
    const navigate = useNavigate();

    const advance = (url: string) => {
        theme.setLoadState(-2);
        setTimeout(() => {
            navigate(url);
            theme.setFullscreen(false)
        }, 500)
    }

    return <div className="apex-home w-100 h-100 col-cc">
        { theme.loadState >= 0 &&
            <Loading progress={theme.loadState} callback={() => {
                theme.setLoadState(-1)
                theme.setFullscreen(false)
            }} />
        }
        <AnimatePresence>
            { theme.loadState == -1 &&
                <div className="document">
                    <motion.div className="top-half row-bc" variants={Anim.bounceX(-500).spring(240, 0.25, 30).build()}
                                initial="inactive" animate="active" exit="inactive" whileHover={{boxShadow: "0 0 1rem white"}} tabIndex={0}
                                onClick={() => advance("/coding")}
                    >
                        <div className="text col-ss h-100">
                            <h1 className="oxanium bold">
                                Coding
                            </h1>
                            <ul className="h6 oxanium">
                                <li>Specialized workshops taught by VHHS students</li>
                                <li>3:1 student-teacher ratio</li>
                                <li>12 sessions, rate TBA</li>
                                {
                                    // TODO: Insert button here
                                }
                            </ul>
                            <h6 className="bold">Click for more details.</h6>
                        </div>
                        <img src={codeImg} />
                    </motion.div>
                    <motion.div className="bottom-half row-bc" variants={Anim.bounceX(500).spring(240, 0.25, 30).build()}
                                initial="inactive" animate="active" exit="inactive" whileHover={{boxShadow: "0 0 1rem white"}} tabIndex={0}
                                onClick={() => advance("/consulting")}
                    >
                        <img src={consultImg}/>
                        <div className="text col-se h-100">
                            <h1 className="oxanium bold">
                                Consulting
                            </h1>
                            <ul className="h6 oxanium">
                                <li>Provide local businesses with technology solutions</li>
                                <li>For eager students looking for meaningful work</li>
                                <li>Around 1 project per year, per student</li>
                                {
                                    // TODO: Insert button here
                                }
                            </ul>
                            <h6 className="bold">Click for more details.</h6>
                        </div>
                    </motion.div>
                </div>
            }
        </AnimatePresence>
    </div>
}

export default Home;
