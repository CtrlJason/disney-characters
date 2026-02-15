import { useState } from "react";

// Types
import type { alertContextProps, alertProps } from "../../types/alert";

const alertHook = (): alertContextProps => {
    // Estado de feedback para mostrar mensajes de éxito o error
    const [status, setStatus] = useState<alertProps>({
        type: "idle", // 'idle' | 'success' | 'error'
        message: "",
    });

    // Función para actualizar el estado de la alerta
    const handleStatusAlert = (status: alertProps) => {
        setStatus(status);

        setTimeout(() => {
            setStatus({ message: "", type: "idle" });
        }, 3000);
    };

    return {
        status,
        handleStatusAlert,
    };
};

export default alertHook;
