import { createBrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "./components/error";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Products from "./pages/Products";
import Error404 from "./pages/error-page";
import Details from './pages/Details';
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import SignOut from './pages/SignOut'

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
    path: "/products",
    element: <Products category="random" />,
  },
  {
    path: "/phones",
    element: <Products category="phone" />,
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
    element: <h1>About Bestore</h1>,
    children: [
      {
        path: "/about/career",
        element: <h1>Career</h1>,
      },
      {
        path: "/about/affiliate-and-partners",
        element: <h1>Affiliate and Partners</h1>,
      },
    ],
  },
  {
    path: "/blog",
    element: <h1>Blog</h1>,
  },
  {
    path: "/services",
    element: <h1>Services</h1>,
    children: [
      {
        path: "/services/coupons",
        element: <h1>Coupons and Gifts</h1>,
      },
      {
        path: "/services/apps",
        element: <h1>Mobile App</h1>,
      },
      {
        path: "/services/merchant",
        element: <h1>Become a Merchant</h1>,
      },
    ],
  },
  {
    path: "/help",
    element: <h1>Help</h1>,
    children: [
      {
        path: "/help/returns",
        element: <h1>Returns</h1>,
      },
      {
        path: "/help/track-orders",
        element: <h1>Track Orders</h1>,
      },
      {
        path: "/help/contact",
        element: <h1>Contact us</h1>,
      },
      {
        path: "/help/security-and-fraud",
        element: <h1>Security and Fraud</h1>,
      },
    ],
  },
  {
    path: "/terms-of-use",
    element: <h1>Terms of Use</h1>,
  },
  {
    path: "/privacy-policy",
    element: <h1>Privacy Policy</h1>,
  },
  {
    path: "/promotions",
    element: <h1>Promotions</h1>,
    children: [
      {
        path: "/promotions/cashback",
        element: <h1>Cashback</h1>,
      },
    ],
  },
  {
    path: "/checkout",
    element: <h1>Checkout</h1>,
  },
  {
    path: "*",
    element: <Error404 />,
    errorElement: <ErrorBoundary path="/" message="Page Not Found" />,
  },
]);

export default router;