import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import App from "./App";
import UserDashboard from "./components/UserDashboard";
import ShoppingCartPage from "./components/Cart/ShoppingCartPage";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./components/AboutUs";
import WishlistPage from "./components/Wishlist";
import PrivacyPolicyPage from "./components/PrivacyPolicy";
import DesignYourCharm from "./components/DesignYourCharm/DesignYourCharm";
import ShopCollection from "./components/Shop/ShopCollection";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      { path: "/", element: <App /> },
      { path: "/user-dashboard", element: <UserDashboard /> },
      { path: "/cart", element: <ShoppingCartPage /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/about-us", element: <AboutPage /> },
      { path: "/wishlist", element: <WishlistPage /> },
      { path: "/privacy-policy", element: <PrivacyPolicyPage /> },
      { path: "/custom-design", element: <DesignYourCharm /> },
      { path: "/shop", element: <ShopCollection /> },
    ],
  },
]);

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element not found");

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
