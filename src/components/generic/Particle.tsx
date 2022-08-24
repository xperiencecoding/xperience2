import React, {memo, useEffect, useState} from "react";
import "../../scss/core.scss"
import "../../scss/generic.scss"
import {motion} from "framer-motion";
import {Anim} from "../../Animation";

function Particle(props: {

}) {

    const [initialCoords, setInitialCoords] = useState([0, 0])

    // set randomizer down here

    useEffect(() => {
        setInitialCoords([Math.random(), Math.random()])
    }, [])

    return <motion.div className="particle" style={{
        left: `${initialCoords[0] * 120 - 10}%`,
        top: `${initialCoords[1] * 200}%`,
        width: `${(24 - 12 * (initialCoords[1])).toFixed(0)}px`,
    }} animate={{
        top: `${(initialCoords[1] - 1) * 100}%`,
        opacity: 0,
    }}transition={{
        top: {
            from: `${initialCoords[1] * 200}%`,
            duration: Math.random() * 20 + 20,
            repeatType: "loop",
            repeat: Infinity,
        },
        opacity: {
            from: 0.3,
            duration: Math.random() * 2 + 2,
            repeat: Infinity,
            repeatType: "mirror",
        },
    }} />
}

export default Particle;
