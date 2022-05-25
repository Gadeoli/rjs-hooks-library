import { useState, useEffect } from 'react';
import { secureJSONStringify } from 'helpers';

import { usePersistedStateProps } from './usePersistedState.types';

const usePersistedState = (props: usePersistedStateProps) => {
    const {key, initialState} = props;
    const [state, setState] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialState;    
    });

    useEffect(() => {                           
        localStorage.setItem(key, secureJSONStringify(state));
    }, [key, state]);

    return [state, setState];
}

export default usePersistedState;