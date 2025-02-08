import {useRef, useEffect} from 'react';

import { usePreviousProps } from './usePrevious.types';

const usePrevious : usePreviousProps = (value) =>{
    const ref = useRef(null);

    useEffect(() => {
        ref.current = value;
    });
    
    return ref.current;
}

export default usePrevious;