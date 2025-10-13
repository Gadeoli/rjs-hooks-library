export interface useOnInfiniteScrollTriggerProps {
    (hasMore: boolean, loading: boolean, onTrigger?: () => {}) : any;
}