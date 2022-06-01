import { useState, useEffect } from 'react';

const useTimer = (initialMinutes = 0, initialSeconds = 0, reset = 1) => {
    const [ minutes, setMinutes ] = useState(initialMinutes);
    const [ seconds, setSeconds ] =  useState(initialSeconds);

    /* eslint-disable */
    useEffect(() => {
        setMinutes(initialMinutes);
        setSeconds(initialSeconds);
    }, [reset]);
    /* eslint-enable */

    useEffect(() => {
        // console.log(initialMinutes, initialSeconds, minutes, seconds)
    })

    useEffect(()=>{
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)

        return ()=> {
            clearInterval(myInterval);
        };
    });

    return {
        minutes, seconds
    };
}

export default useTimer;