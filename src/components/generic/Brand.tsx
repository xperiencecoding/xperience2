import React from "react";
import "../../scss/core.scss"
import "../../scss/generic.scss"
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import {useTheme} from "./ThemeContext";

function Brand(props: {
    cannotClick?: boolean,
}) {

    const navigate = useNavigate()
    const theme = useTheme()

    return <motion.div tabIndex={0} className="apex-brand expletus bold row-sc" whileHover={!props.cannotClick ? {
        boxShadow: "0 0 1rem white"
    } : {}} onClick={!props.cannotClick ? () => {
        theme.setLoadState(-1)
        setTimeout(() => navigate("/"), 500)
    } : () => {}}>
        <div className="font-300">
            XP
        </div>
        <div className="captions col-ss font-100">
            <div>
                Coding +
            </div>
            <div>
                Consulting
            </div>
        </div>
    </motion.div>
}

export default Brand;
