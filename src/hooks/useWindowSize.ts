import { useState, useEffect } from "react";
import { useWindowSizeProps } from "./useWindowSize.props";

const initialValues = {
    width: 1,
    height: 1
};

const useWindowSize : useWindowSizeProps = () => {
    const [windowSize, setWindowSize] = useState({...initialValues});
    
    useEffect(() => {
        const handleResize = () => {
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

export default useWindowSize;