import { RefObject } from "react";

export interface useInViewportProps {
    (ref: RefObject<HTMLElement>, options?: IntersectionObserverInit) : boolean;
}