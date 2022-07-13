import React from "react";

import { useClickOutsideProps } from './useClickOutside.types';

const useClickOutside : useClickOutsideProps = (ref, action) => {
    React.useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(e : any) {
            if (ref.current && !ref.current.contains(e.target)) {
                action();
            }
        }
        
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, action]);
}

export default useClickOutside;

    