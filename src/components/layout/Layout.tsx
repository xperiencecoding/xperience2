import React, {useEffect, useState} from "react";
import "../../scss/core.scss"
import "../../scss/layout.scss"
import {AnimatePresence, motion} from "framer-motion";
import {useTheme} from "../generic/ThemeContext";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ParticleWrapper from "../generic/ParticleWrapper";

function Layout(props: {
    children: any,
}) {

    const theme = useTheme()

    useEffect(() => {
        theme.setPersistentBg("black")
    }, [])

    return <div className="apex-layout col-sc w-100" style={{
        backgroundColor: theme.persistentBg,
    }}>
        <AnimatePresence>
            { !theme.fullscreen &&
                <Navigation />
            }
        </AnimatePresence>
        <ParticleWrapper>
            {props.children}
        </ParticleWrapper>
        <Footer />
    </div>
}

export default Layout;
