import { createBrowserRouter } from "react-router-dom";
//import Home from "./pages/Home";
//import Error from "./components/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Home</div>,
        //errorElement: <Error message="Oops!!! something went wrong" />
    },
]);

export default router;