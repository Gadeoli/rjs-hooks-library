import {useRef, useEffect} from 'react';

import { usePreviousProps } from './usePrevious.types';

const usePrevious = (props: usePreviousProps) =>{
    const {value} = props;
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    });
    
    return ref.current;
}

export default usePrevious;