import { useEffect, useState } from "react";

export const useGhostInFirstRender = (delay = 30): boolean => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(true);
        }, delay);

        return () => clearTimeout(timeout);
    }, [delay]);

    return visible;
};

export default useGhostInFirstRender;