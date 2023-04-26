import { useEffect, useState } from 'react';
import { useImagePreloaderProps } from './useImagePreloader.types';

const preloadImage = (src: string) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        
        img.onload = function() {
            resolve(img);
        }
        
        img.onerror = img.onabort = function() {
            reject(src);
        }
        
        img.src = src;
    })
}

const useImagePreloader : useImagePreloaderProps = (srcImgs) => {
    const [imagesPreloaded, setImagesPreloaded] = useState<boolean>(false);

    useEffect(() => {
        let isCancelled = false;

        async function effect() {
            if (isCancelled) {
                return;
            }

            const imagesPromiseList: Promise<any>[] = [];

            for (const i of srcImgs) {
                imagesPromiseList.push(preloadImage(i));
            }
        
            await Promise.all(imagesPromiseList);

            if (isCancelled) {
                return;
            }

            setImagesPreloaded(true);
        }

        effect();

        return () => {isCancelled = true};
    }, [srcImgs]);

    return { imagesPreloaded };
}

export default useImagePreloader;