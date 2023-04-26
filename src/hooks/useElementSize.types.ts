export interface useElementSizeProps {
    (ref: any, forceRefresh?: number ): {
        width: number, 
        height: number,
        position: {
            x: number,
            y: number,
            left: number,
            right: number,
            top: number,
            bottom: number
        },
        screen: {
            width: number,
            height: number
        }
    };
}