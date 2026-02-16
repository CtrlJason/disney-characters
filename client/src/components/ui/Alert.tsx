import { useAlertContext } from "../../context/AlertContext";
import type { alertProps } from "../../types/alert";

const colors: Record<alertProps["type"], string> = {
    "idle": "bg-gray-500",
    "success": "bg-green-500",
    "error": "bg-red-500",
}

const Alert = ({ message }: { message: string }) => {
    const { status } = useAlertContext();

    return (
        <div>
            {status.isActive && (
                <div className={`fixed z-20 top-4 right-4 ${colors[status.type]} text-white px-4 py-2 rounded shadow-lg`}>
                    {message}
                </div>
            )}
        </div>
    );
}
export default Alert;