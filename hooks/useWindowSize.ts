import {useEffect, useState} from "react"

type WindowSizeType = {
    width: undefined | number
    height: undefined | number
}

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState<WindowSizeType>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}