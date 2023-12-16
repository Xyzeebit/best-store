import { createBrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "./components/error";
import Auth from "./pages/Auth";
import Products from "./pages/Products";
import Error404 from "./pages/error-page";
import Details from './pages/Details';
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Checkout from './pages/Checkout';
import SignOut from './pages/SignOut'
import NotFound from "./pages/NotFound";
import { Home } from "./pages";
import ManageStore from "./pages/ManageStore";

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
    element: <Auth signIn={false} />,
    errorElement: (
      <ErrorBoundary
        message="Oops!!! an error occurred while loading this page"
        path="/"
      />
    ),
  },
  {
    path: "/signup",
    element: <Auth signIn={false} />,
    errorElement: (
      <ErrorBoundary
        message="Oops!!! an error occurred while loading this page"
        path="/"
      />
    ),
  },
  {
    path: "/signout",
    element: <SignOut />,
    errorElement: (
      <ErrorBoundary
        message="Oops!!! an error occurred while loading this page"
        path="/"
      />
    ),
  },
  {
    path: "/account",
    element: <Profile />,
    errorElement: (
      <ErrorBoundary
        message="Oops!!! an error occurred while loading this page"
        path="/"
      />
    ),
  },
  {
    path: "/cart",
    element: <Cart />,
    errorElement: (
      <ErrorBoundary
        message="Oops!!! an error occurred while loading this page"
        path="/"
      />
    ),
  },
  {
    path: "/manage-store",
    element: <ManageStore />,
    errorElement: (
      <ErrorBoundary
        message="Oops!!! an error occurred while loading this page"
        path="/"
      />
    ),
  },
  {
    path: "/products",
    element: <Products category="random" />,
  },
  {
    path: "/phones",
    element: <Products category="phones" />,
  },
  {
    path: "/laptops",
    element: <Products category="laptops" />,
  },
  {
    path: "/home-appliances",
    element: <Products category="appliances" />,
  },
  {
    path: "/games",
    element: <Products category="games" />,
  },
  {
    path: "/gadgets",
    element: <Products category="gadgets" />,
  },
  {
    path: "/toys",
    element: <Products category="toys" />,
  },
  {
    path: "/games-and-toys",
    element: <Products category="games" />,
  },
  {
    path: "/bags",
    element: <Products category="bags" />,
  },
  {
    path: "/luggage",
    element: <Products category="luggage" />,
  },
  {
    path: "/travel",
    element: <Products category="travel" />,
  },
  {
    path: "/footwears",
    element: <Products category="footwears" />,
  },
  {
    path: "/shoes",
    element: <Products category="shoes" />,
  },
  {
    path: "/makeup-and-cosmetics",
    element: <Products category="makeup" />,
  },
  {
    path: "/clothings",
    element: <Products category="clothings" />,
  },
  {
    path: "/shirts",
    element: <Products category="shirts" />,
  },
  {
    path: "/outdoor",
    element: <Products category="outdoor" />,
  },
  {
    path: "/babies",
    element: <Products category="babies" />,
  },
  {
    path: "/books",
    element: <Products category="books" />,
  },
  {
    path: "/books-and-stationeries",
    element: <Products category="stationeries" />,
  },
  {
    path: "/flashsales",
    element: <Products category="flashsales" />,
  },
  {
    path: "/deals",
    element: <Products category="flashsales" />,
  },
  {
    path: "/:category",
    element: <Products category="random" />,
  },
  {
    path: "deals/:itemId",
    element: <Details />,
    errorElement: <ErrorBoundary path="/" message="Unable to load data" />,
  },
  {
    path: ":category/:itemId",
    element: <Details />,
    errorElement: <ErrorBoundary path="/" message="Unable to load data" />,
  },
  {
    path: "/products/electronics",
    element: <Products category="electronics" />,
  },
  {
    path: "/home-and-living",
    element: <Products category="home" />,
  },
  {
    path: "/care-products",
    element: <Products category="care" />,
  },
  {
    path: "/sport-and-outdoors",
    element: <Products category="sports" />,
  },
  {
    path: "/hairs",
    element: <Products category="hairs" />,
  },
  {
    path: "/about",
    element: <NotFound />,
    children: [
      {
        path: "/about/career",
        element: <NotFound />,
      },
      {
        path: "/about/affiliate-and-partners",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/blog",
    element: <NotFound />,
  },
  {
    path: "/services",
    element: <NotFound />,
    children: [
      {
        path: "/services/coupons",
        element: <NotFound />,
      },
      {
        path: "/services/apps",
        element: <NotFound />,
      },
      {
        path: "/services/merchant",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/help",
    element: <NotFound />,
    children: [
      {
        path: "/help/returns",
        element: <NotFound />,
      },
      {
        path: "/help/track-orders",
        element: <NotFound />,
      },
      {
        path: "/help/contact",
        element: <NotFound />,
      },
      {
        path: "/help/security-and-fraud",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/terms-of-use",
    element: <NotFound />,
  },
  {
    path: "/privacy-policy",
    element: <NotFound />,
  },
  {
    path: "/promotions",
    element: <NotFound />,
    children: [
      {
        path: "/promotions/cashback",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/checkout",
    element: <Checkout />,
    errorElement: <ErrorBoundary path="/" message="Page Not Found" />,
  },
  {
    path: "*",
    element: <Error404 />,
    errorElement: <ErrorBoundary path="/" message="Page Not Found" />,
  },
]);

export default router;