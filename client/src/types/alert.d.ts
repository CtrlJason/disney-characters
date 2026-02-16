export type alertStatusProps = "idle" | "success" | "error";

export interface alertProps {
    type: alertStatusProps;
    isActive: boolean;
    message: string;
}

export interface alertContextProps {
    status: alertProps;
    handleStatusAlert: (status: alertProps) => void;
}
