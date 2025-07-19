import { useEffect } from "react";

import { useOnPressKeyProps } from './useOnPressKey.types';

const useOnPressKey : useOnPressKeyProps = (keyAsc, action, modifierKey = null) => {
    useEffect(() => {
        const onPressKey = (e: any) => {
            if (e.keyCode === keyAsc && (modifierKey ? e[modifierKey] : true)) {
                action();
            }
        };

        document.addEventListener("keydown", onPressKey);

        return () => document.removeEventListener("keydown", onPressKey);
    }, [action, keyAsc, modifierKey]);
}

export default useOnPressKey;