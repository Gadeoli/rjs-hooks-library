import { useEffect, useState } from "react";
import { useHoverProps } from './useHover.types';

const useHover : useHoverProps = (ref) => {
    const [show, setShow] = useState(false);   

    useEffect(() => {
        if(ref && ref.current){
            const show = (e : any) => setShow(true);
            const hide = (e: any) => setShow(false);

            document.addEventListener("mouseenter", show);
            document.addEventListener("mouseleave", hide);

            return () => {
                document.removeEventListener("mouseenter", show);
                document.removeEventListener("mouseleave", hide);
            }
        }
    }, [ref]);

    return {show};
}

export default useHover;