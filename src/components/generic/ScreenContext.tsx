import React, {useEffect, useState} from "react";

const mobileBreak = 600;
const desktopBreak = 1280;

type TScreenContext= {
    height: number,
    width: number,
    scrollX: number,
    scrollY: number,
    isMobile: () => boolean,
    isTablet: () => boolean,
    isDesktop: () => boolean,
}

const ScreenContext = React.createContext<TScreenContext>({
    height: 0,
    width: 0,
    scrollX: 0,
    scrollY: 0,
    isMobile: () => false,
    isTablet: () => false,
    isDesktop: () => false
})

export function useScreen() {
    return React.useContext(ScreenContext)
}

export default function ScreenProvider(props: {
    children: any,
}) {
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);
    const [scrollX, setScrollX] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    const resizeListener = (e: any) => {
        setWidth(e.target.innerWidth)
    }

    const scrollListener = (e: any) => {
        setScrollX(window.scrollX / document.body.clientWidth)
        setScrollY(window.scrollY / document.body.clientHeight)
    }

    useEffect(() => {
        window.addEventListener("resize", resizeListener);
        window.addEventListener("scroll", scrollListener);
        return () => {
            window.removeEventListener("resize", resizeListener);
            window.removeEventListener("scroll", scrollListener);
        }
    }, [])

    return <ScreenContext.Provider value={{
        width: width,
        height: height,
        scrollX: scrollX,
        scrollY: scrollY,
        isMobile: () => width < mobileBreak,
        isTablet: () => width < desktopBreak && width >= mobileBreak,
        isDesktop: () => width >= desktopBreak
    }}>
        {props.children}
    </ScreenContext.Provider>
}
