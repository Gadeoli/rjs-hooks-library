import React, { useState } from "react";

import { useElementSizeProps } from './useElementSize.types';

const useElementSize : useElementSizeProps = (ref) => {
    const [dimensions, setDimensions] = useState({ 
        width: 1, 
        height: 2,
        position: {
            x: 1,
            y: 1,
            left: 1,
            right: 1,
            top: 1,
            bottom: 1
        },
        screen: {
            width: 1,
            height: 1
        }
    });

    React.useEffect(() => {
        if (ref.current) {
            const handleElementSize = () => {
                const { current } = ref;
                const boundingRect = current.getBoundingClientRect();

                setDimensions({ 
                    width:  Math.round(boundingRect.width), 
                    height: Math.round(boundingRect.height),
                    position: {
                        x: Math.round(boundingRect.x),
                        y: Math.round(boundingRect.y),
                        left:   Math.round(boundingRect.left),
                        right:  Math.round(boundingRect.right),
                        top:    Math.round(boundingRect.top),
                        bottom: Math.round(boundingRect.bottom)
                    },
                    screen: {
                        width: Math.round(window.screen.width),
                        height: Math.round(window.screen.height)
                    }
                });
            }

            window.addEventListener("resize", handleElementSize);
            handleElementSize();
            return () => window.removeEventListener("resize", handleElementSize);
        }
    }, [ref]);

    return dimensions;
}

export default useElementSize;

    