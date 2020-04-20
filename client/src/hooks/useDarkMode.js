import { useState, useEffect} from "react";

export const useDarkMode = state => {
    const [darkMode, setdarkMode] = useState(state)

    useEffect(() => {
        var element = document.body;
        if (darkMode === true){
            console.log('DARKMODE ENABLED');
            element.className = 'dark-mode';
         }
         else {
            console.log('DARKMODE DISABLED');
            element.classList.remove("dark-mode");
         }
    },[darkMode, setdarkMode, state])
    return [darkMode, setdarkMode];
};
