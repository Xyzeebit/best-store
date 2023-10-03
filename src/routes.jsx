import { createBrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "./components/error";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: (
      <ErrorBoundary
        message="Oops!!! an error occurred while loading this page"
        path="/"
      />
    ),
  },
  {
    path: "/signin",
    element: <Auth signIn={true} />,
    errorElement: (
      <ErrorBoundary
        message="Oops!!! an error occurred while loading this page"
        path="/"
      />
    ),
  },
  {
    path: "/register",
    element: <Auth Signin={false} />,
    errorElement: (
      <ErrorBoundary
        message="Oops!!! an error occurred while loading this page"
        path="/"
      />
    ),
  },
  {
    path: "/cart",
    element: <h1>Cart</h1>,
    errorElement: (
      <ErrorBoundary
        message="Oops!!! an error occurred while loading this page"
        path="/"
      />
    ),
  },
]);

export default router;