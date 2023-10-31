import React, {useState} from "react";
import "../../scss/core.scss"
import "../../scss/layout.scss"
import {motion} from "framer-motion";
import Brand from "../generic/Brand";
import {useScreen} from "../generic/ScreenContext";
import {useTheme} from "../generic/ThemeContext";
import {useLocation, useNavigate} from "react-router-dom";

const data = [
    ["Coding", "/coding"],
    ["Consulting", "/consulting"],
    ["Projects", "/projects"],
    ["Team", "/team"],
    ["Form", "/form"]
]

const menuItems = [
    {
      title: 'Coding',
      url: '/',
    },
    {
      title: 'Consulting',
      url: '/services',
      submenu: [
        {
          title: 'web design',
          url: 'web-design',
        },
        {
          title: 'web development',
          url: 'web-dev',
        },
        {
          title: 'SEO',
          url: 'seo',
        },
      ],
    },
  ];
  
function Navigation(props: {}) {

    const screen = useScreen()
    const theme = useTheme()
    const navigate = useNavigate()
    const location = useLocation()
    const [hovering, setHovering] = useState(false);

    return <motion.div className="apex-navigation w-100 row-bc" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} animate={
        (screen.scrollY == 0 || hovering) ? {top: "0%"} : {top: "-5rem"}
    } initial={{top: "-5rem"}} exit={{top: "-5rem"}}>
        <div>
            <Brand />
        </div>
        <div className="buttons oxanium bold row-cc">
            {
                data.map((v, i) => {
                    return <motion.div tabIndex={0} className="h3" key={i} whileHover={{boxShadow: "0 0 1rem white"}} onClick={() => {
                        if (location.pathname !==v[1]) {
                            theme.setLoadState(-3)
                            setTimeout(() => {
                                theme.setFullscreen(false)
                                navigate(v[1])
                            }, 500)
                        }
                    }}>
                        {
                            v[0]
                        }
                    </motion.div>
                })
            }
        </div>
    </motion.div>
}

export default Navigation;