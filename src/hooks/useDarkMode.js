import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import useMedia from './useMedia';


const useDarkMode = (initialState) => {
    const [value, setValue] = useLocalStorage('darkModeEnabled', initialState);
    // console.log(value);

    // 12-4-20 below
    // Confirmed that this worked by returning [prefersDarkMode, setValue];
    // instead of [value2, setValue]; — so the user could not toggle the 
    // dark mode at all, but, by changing my OS system preferences (i.e.,
    // by toggling between light and dark modes in my system preferences),
    // I was able to switch between light and dark mode on the localhost:3000
    // page.
    const prefersDarkMode = usePrefersDarkMode();

    const value2 = typeof value !== 'undefined' ? value : prefersDarkMode;
    // 12-4-20 above


    return [value2, setValue];
}

export default useDarkMode;

// Quoted from the source (https://usehooks.com/useDarkMode/):
// "Compose our useMedia hook to detect dark mode preference.
// The API for useMedia looks a bit weird, but that's because ...
// ... it was designed to support multiple media queries and return values.
// Thanks to hook composition we can hide away that extra complexity!
// Read the recipe for useMedia to learn more: usehooks.com/useMedia"
function usePrefersDarkMode() {
    return useMedia(['(prefers-color-scheme: dark)'], [true], false);
}