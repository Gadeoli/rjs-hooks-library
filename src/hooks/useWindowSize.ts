import { useState, useEffect } from "react";

const initialValues = {
    width: undefined,
    height: undefined
};

const useWindowSize = () => {
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