import React, {useEffect, useRef, useState} from "react";
import "../../scss/core.scss"
import "../../scss/generic.scss"
import {motion} from "framer-motion";
import {Anim} from "../../Animation";
import {useInView} from "react-intersection-observer";
import Brand from "./Brand";
import Progress from "./Progress";
import {useTheme} from "./ThemeContext";

const transition = Anim.getSpring(240, 0, 30);

function Loading(props: {
    progress?: number,
    callback: Function,
}) {

    // TODO: switch over to using progress prop

    const [load, setLoad] = useState(0)
    const theme = useTheme();

    useEffect(() => {
        theme.setFullscreen(true)
    })

    useEffect(() => {
        const timer = setTimeout(() => setLoad(load + 0.20), 600)

        return () => clearTimeout(timer)
    }, [load])

    return <motion.div className="apex-loading col-cc" animate={load >= 1 ? {
        opacity: 0,
    } : {}} transition={Anim.getSpring(90, 0.1, 30)}>
        <motion.div className="top-half" animate={load >= 1 ? {
            top: "-100%",
        } : {
            top: 0,
        }} transition={transition}/>
        <motion.div className="bottom-half" animate={load >= 1 ? {
            bottom: "-100%",
        } : {
            bottom: 0,
        }} transition={transition} />
        <div className="middle col-cc">
            <Brand cannotClick />
            <Progress progress={load} width={14} callback={() => {
                setTimeout(() => props.callback(), 1000)
            }} />
        </div>
    </motion.div>
}

export default Loading;
