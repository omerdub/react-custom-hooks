import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue);
    });
    
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);
    return [value, setValue];
}

function getSavedValue(key, value) {
    try {
        const savedValue = JSON.parse(localStorage.getItem(key));
        if(savedValue) return savedValue;
    } catch (err) {
        console.log("Error while trying to access local storage: " + err)
    }
    if(value instanceof Function) return value();
    return value;
}