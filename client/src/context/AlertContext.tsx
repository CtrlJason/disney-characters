import { createContext, useContext } from "react";

// Hooks
import alertHook from "../hooks/alerts/alertHook";

// Types
import type { alertContextProps } from "../types/alert";

// Render
import { Outlet } from "react-router";

const AlertContext = createContext<alertContextProps | null>(null);

const AlertProvider = () => {
    const data = alertHook();

    return (
        <AlertContext.Provider value={data}>
            <Outlet />
        </AlertContext.Provider>
    );
};

const useAlertContext = () => {
    const context = useContext(AlertContext);

    if (!context) {
        throw new Error("useAlertContext debe ser usado dentro de AlertProvider");
    }

    return context;
};

export { AlertProvider, useAlertContext };