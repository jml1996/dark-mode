import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';


const useDarkMode = (initialState) => {
    const [value, setValue] = useLocalStorage('darkModeEnabled', initialState);
    console.log(value);
    return [value, setValue];
}

export default useDarkMode;