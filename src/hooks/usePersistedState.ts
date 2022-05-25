import { useState, useEffect } from 'react';
import { secureJSONStringify } from '@gadeoli/js-helpers-library';

import { usePersistedStateProps } from './usePersistedState.types';

const usePersistedState : usePersistedStateProps = (key, initialState) => {
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