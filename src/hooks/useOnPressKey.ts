import React from "react";

import { useOnPressKeyProps } from './useOnPressKey.types';

const useOnPressKey : useOnPressKeyProps = (ref, keyAsc, action) => {
    React.useEffect(() => {
        const onPressKey = (e) => {
            if (e.keyCode === keyAsc) {
                action()
            }
        }
        
        document.addEventListener("keydown", onPressKey);

        return () => {
            document.removeEventListener("keydown", onPressKey);
        };
    }, [ref, action]);
}

export default useOnPressKey;