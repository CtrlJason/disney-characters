import { createBrowserRouter, RouterProvider } from "react-router";

// Pages
import Home from "../pages/Home";

const AppRoutes = () => {
    // Configuración de rutas
    const router = createBrowserRouter([
        { path: "/", element: <Home /> },
    ]);

    return <RouterProvider router={router} />;
}

export default AppRoutes;