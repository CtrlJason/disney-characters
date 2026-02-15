import { createBrowserRouter, RouterProvider } from "react-router";

// Context
import { AlertProvider } from "../context/AlertContext";

// Pages
import Home from "../pages/Home";
import CharacterInformation from "../pages/CharacterInformation";

const AppRoutes = () => {
    // Configuración de rutas
    const router = createBrowserRouter([
        {
            element: <AlertProvider />,
            children: [
                { path: "/", element: <Home />, },
                { path: "/character/:id", element: <CharacterInformation /> },
            ]
        }

    ]);

    return <RouterProvider router={router} />;
}

export default AppRoutes;