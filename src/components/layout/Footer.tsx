import React from "react";
import "../../scss/core.scss"
import "../../scss/layout.scss"
import {motion} from "framer-motion";

function Footer(props: {}) {
    return <div className="bold oxanium w-100 text-centered apex-footer">
        Copyright 2022 <a href="https://wikilabs.dev" target="_blank">wikiLabs</a>. Some rights reserved.
    </div>
}

export default Footer;
