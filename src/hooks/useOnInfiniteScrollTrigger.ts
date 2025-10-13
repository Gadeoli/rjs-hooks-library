import { 
    useRef, 
    useCallback 
} from 'react';
import { useOnInfiniteScrollTriggerProps } from './useOnInfiniteScrollTrigger.types';

const useOnInfiniteScrollTrigger : useOnInfiniteScrollTriggerProps = (hasMore, loading, onTrigger) => {
    const observer = useRef<IntersectionObserver | null>(null);

    const lastElementRef = useCallback((node : any) => {
        if (loading) return;

        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore && onTrigger) {
                onTrigger();
            }
        })

        if (node) observer.current.observe(node);
    }, [loading, hasMore, onTrigger]);

    return lastElementRef;
}

export default useOnInfiniteScrollTrigger;