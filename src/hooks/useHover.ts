import { useEffect, useState } from "react";
import { useHoverProps } from './useHover.types';

const useHover : useHoverProps = (ref) => {
    const [show, setShow] = useState(false);   

    useEffect(() => {
        if(ref && ref.current){
            const show = (e : any) => setShow(true);
            const hide = (e: any) => setShow(false);

            ref.current.addEventListener("mouseenter", show);
            ref.current.addEventListener("mouseleave", hide);

            return () => {
                ref.current.removeEventListener("mouseenter", show);
                ref.current.removeEventListener("mouseenter", hide);
            }
        }
    }, [ref]);

    return {show};
}

export default useHover;