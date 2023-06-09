import { useEffect, useState } from "react";
import { useHoverProps } from './useHover.types';

const useHover : useHoverProps = (ref) => {
    const [show, setShow] = useState(false);   

    useEffect(() => {
        if(ref && ref.current){
            const node = ref.current;

            const show = (e : any) => setShow(true);
            const hide = (e: any) => setShow(false);

            node.addEventListener("mouseover", show);
            node.addEventListener("mouseout", hide);

            return () => {
                node.removeEventListener("mouseover", show);
                node.removeEventListener("mouseout", hide);
            }
        }
    }, [ref]);

    return {show};
}

export default useHover;