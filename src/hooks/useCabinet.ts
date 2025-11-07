import { useMemo, useState } from "react";
import { useCabinetProps } from "./useCabinet.types";

const useCabinet : useCabinetProps = (n, rootInitial = true) => {
    const initialStructure = useMemo(() => {
        return Array.from({ length: Math.max(0, n) }, (_, i) => i === 0 ? !!rootInitial : false);
    }, [n, rootInitial]);

    const clampN = (nx: number) => Number.isFinite(nx) ? Math.max(0, Math.min(n - 1, nx)) : 0;

    const [cabinet, setCabinet] = useState(() => [...initialStructure]);

    const reset = () => {
        setCabinet([...initialStructure]);
        
        return [...initialStructure];
    };

    const push = (nx: number) => {
        if (n <= 0) return [];
        
        const i = clampN(nx);
        const next = cabinet.map((_, j) => (j <= i ? true : cabinet[j]));
        
        setCabinet(next);
        
        return next;
    };

    const pull = (nx: number) => {
        if (n <= 0) return [];
        
        const i = clampN(nx);
        const next = cabinet.map((_, j) => (j >= i ? false : cabinet[j]));
        
        setCabinet(next);
        
        return next;
    };

    const reverse = (nx: number) => {
        if (n <= 0) return [];
        
        const i = clampN(nx);
        const currently = cabinet[i];
        let next = [...cabinet];

        if (!currently) {
            for (let j = 0; j <= i; j++) next[j] = true;
        } else {
            for (let j = i; j < n; j++) next[j] = false;
        }

        setCabinet(next);
        
        return next;
    };

    return {
        drawers: cabinet,
        reset,
        push,
        pull,
        reverse,
    };
};

export default useCabinet;