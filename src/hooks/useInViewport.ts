import { useEffect, useState } from 'react';
import { useInViewportProps } from './useInViewport.types';

const useInViewport : useInViewportProps = (ref, options) => {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.length === 0) return;
                setInView(entries[0].isIntersecting);
            },
            options
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [ref, options]);

    return inView;
};

export default useInViewport;