import { createContext, useContext, useState } from "react";

// Create Context
const DarkModeContext = createContext();

// Custom Hook to use context easily
export function useDarkMode() {
    return useContext(DarkModeContext);
}

// Context Provider Component
export function DarkModeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}
