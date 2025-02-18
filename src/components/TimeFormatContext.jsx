import { createContext, useContext, useState } from "react";

// Create Context
const TimeFormatContext = createContext();

// Custom Hook to use context easily
export function useTimeFormat() {
    return useContext(TimeFormatContext);
}

// Context Provider Component
export function TimeFormatProvider({ children }) {
    const [isOn, setIsOn] = useState(true);

    return (
        <TimeFormatContext.Provider value={{ isOn, setIsOn }}>
            {children}
        </TimeFormatContext.Provider>
    );
}
