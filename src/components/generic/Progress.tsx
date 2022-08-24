import React, {useEffect} from "react";
import "../../scss/core.scss"
import "../../scss/generic.scss"
import {motion} from "framer-motion";
import {Anim} from "../../Animation";

function Progress(props: {
    progress: number,
    color?: string,
    width?: number,
    callback?: Function,
}) {

    useEffect(() => {
        if (props.progress >= 1 && props.callback) {
            props.callback()
        }
    }, [props.progress])

    return <div className="apex-progress row-cc" style={{
        width: `${props.width}rem`
    }}>
        <motion.div layout className="bar" animate={{left: `-${(1 - props.progress) * 100}%`}} transition={Anim.getSpring(240, 0, 30)}/>
    </div>
}

export default Progress;
