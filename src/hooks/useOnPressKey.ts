import React from "react";

import { useOnPressKeyProps } from './useOnPressKey.types';

const useOnPressKey : useOnPressKeyProps = (keyAsc, action) => {
    React.useEffect(() => {
        const onPressKey = (e : any) => {
            if (e.keyCode === keyAsc) {
                action()
            }
        }
        
        document.addEventListener("keydown", onPressKey);

        return () => {
            document.removeEventListener("keydown", onPressKey);
        };
    }, [action]);
}

export default useOnPressKey;