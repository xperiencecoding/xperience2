import React, {useEffect, useRef, useState} from "react";
import "../../scss/core.scss"
import "../../scss/generic.scss"
import {range} from "../../Animation";
import Particle from "./Particle";

// add outside any div for particles in that div!!

function ParticleWrapper(props: {
    children: any,
    particleCount?: number,
    className?: any,
}) {
    return <div className="particle-wrapper w-100 h-100">
        {
            range(0, props.particleCount ?? 100, 1).map((v, i) => {
                return <Particle key={i} />
            })
        }
        <div className={props.className ?? "" + " bump"}>
            {props.children}
        </div>
    </div>
}

export default ParticleWrapper;
