import { createBrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "./components/error";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorBoundary
            message="Oops!!! an error occurred while loading this page"
            path="/"
        />
    },
]);

export default router;